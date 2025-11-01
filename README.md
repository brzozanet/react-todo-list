# 📝 React TODO List

Aplikacja do zarządzania zadaniami (TODO List) stworzona w React z wykorzystaniem Vite. Projekt pozwala na tworzenie, edycję, usuwanie i oznaczanie zadań jako wykonane. Aplikacja wykorzystuje Zustand do zarządzania globalnym stanem zadań.

## 🌐 Demo

Aplikacja jest dostępna online:

- [GitHub Pages](https://brzozanet.github.io/react-todo-list/)

## 📋 Funkcjonalności

- ✅ **Dodawanie zadań** - tworzenie nowych zadań do wykonania
- ✏️ **Edycja zadań** - możliwość modyfikacji istniejących zadań
- 🗑️ **Usuwanie zadań** - usuwanie zadań z potwierdzeniem
- ✔️ **Oznaczanie jako zrobione** - zaznaczanie wykonanych zadań
- 📊 **Licznik zadań** - wyświetlanie liczby aktywnych zadań
- 🔔 **Powiadomienia** - informacje o operacjach za pomocą Notiflix
- 🚫 **Walidacja** - zapobieganie dodawaniu duplikatów zadań

## 🛠️ Technologie

- **React 19.2.0** - biblioteka do budowy interfejsów użytkownika
- **Vite 7.1.12** - narzędzie buildowe i dev server
- **Zustand 5.0.8** - zarządzanie stanem aplikacji
- **Notiflix 3.2.8** - powiadomienia i potwierdzenia
- **Nanoid 5.1.6** - generowanie unikalnych identyfikatorów
- **PropTypes** - walidacja właściwości komponentów
- **Modern Normalize** - resetowanie stylów CSS
- **CSS Modules** - lokalne style komponentów

## 📁 Struktura projektu

```
react-todo-list/
├── src/
│   ├── components/
│   │   ├── AddTaskForm/        # Formularz dodawania zadań
│   │   ├── Button/             # Komponent przycisku
│   │   ├── TodoItem/           # Pojedynczy element zadania
│   │   └── TodoList/           # Lista zadań
│   ├── store/
│   │   └── store.js            # Store Zustand z logiką zadań
│   ├── App.jsx                 # Główny komponent aplikacji
│   ├── App.module.css          # Style głównego komponentu
│   ├── main.jsx                # Punkt wejścia aplikacji
│   └── index.css               # Globalne style
├── public/                     # Statyczne pliki
├── dist/                       # Zbudowana wersja produkcyjna
├── package.json                # Zależności i skrypty
├── vite.config.js              # Konfiguracja Vite
└── README.md                   # Dokumentacja projektu
```

## 💡 Kluczowe funkcje

### Zarządzanie stanem (Zustand)

Aplikacja wykorzystuje Zustand do zarządzania globalnym stanem zadań. Store zawiera:

- Listę zadań (`todos`)
- Funkcje do dodawania, edycji, usuwania i oznaczania zadań

### Komponenty

- **AddTaskForm** - formularz do dodawania nowych zadań z walidacją
- **TodoItem** - pojedynczy element zadania z możliwością edycji i usuwania
- **TodoList** - lista wszystkich zadań
- **Button** - reużywalny komponent przycisku

### Walidacja

- Sprawdzanie duplikatów zadań przed dodaniem
- Wyłączanie przycisku "Dodaj" gdy pole jest puste
- Potwierdzenia przed usunięciem lub oznaczeniem jako zrobione

## 📋 Wymagania

Na komputerze musi być zainstalowana LTS-wersja [Node.js](https://nodejs.org/en/).

## 🚀 Instalacja

1. **Klonowanie repozytorium**:

```bash
git clone https://github.com/brzozanet/react-todo-list.git
cd react-todo-list
```

2. **Instalacja zależności**:

```bash
npm install
```

## 🚀 Uruchomienie

### Tryb deweloperski

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`

<br>

![Screenshot App](https://raw.githubusercontent.com/brzozanet/react-todo-list/refs/heads/main/src/images/gh-cover-react-todo-list.jpg)
