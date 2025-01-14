import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// prisma start

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //   },
  // });
  // console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.get("/api/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  // res.json({ users: users });
  res.json({ users });
});

app.get("/api/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  res.json({ user });
});

app.post("/api/users", async (req: Request, res: Response) => {
  const name = req.body.name;
  const email = req.body.email;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  res.json({ user });
});

// NOTE: add type
app.delete("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const deleteUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    res.json({ deleteUser });
  } catch (error) {
    res.json({ error });
  }
});

// edit
// NOTE: add type
app.patch("/api/users/:id", async (req, res) => {
  const id = Number(req.params.id);
  const name = req.body.name;
  const email = req.body.email;

  try {
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });
    res.json({ updateUser });
  } catch (error) {
    res.json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
