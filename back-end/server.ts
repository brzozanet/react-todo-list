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

app.get("/api/users", async (request: Request, response: Response) => {
  const users = await prisma.user.findMany();
  // res.json({ users: users });
  response.json({ users });
});

app.get("/api/users/:id", async (request: Request, response: Response) => {
  const id = Number(request.params.id);
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  response.json({ user });
});

app.post("/api/users", async (request: Request, response: Response) => {
  const name = request.body.name;
  const email = request.body.email;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  response.json({ user });
});

// NOTE: add type
app.delete("/api/users/:id", async (request, response) => {
  const id = Number(request.params.id);

  try {
    const deleteUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    response.json({ deleteUser });
  } catch (error) {
    response.json({ error });
  }
});

// NOTE: add type
app.patch("/api/users/:id", async (request, response) => {
  const id = Number(request.params.id);
  const name = request.body.name;
  const email = request.body.email;

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
    response.json({ updateUser });
  } catch (error) {
    response.json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
