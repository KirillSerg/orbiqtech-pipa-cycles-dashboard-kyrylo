# Goal

Build a small single–page “Cycles Dashboard” for PIPA using React + TypeScript.
The page should:
• load “cycles” from a mock API,
• allow filtering by brand and month,
• display a table with status badges and Drive links,
• handle loading, error and empty states in a clean way.

---

## 🚀 Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Context](https://react.dev/reference/react/createContext) – state management
- [Tailwind CSS](https://tailwindcss.com/) – styling
- [useSearchParams from react-router](https://reactrouter.com/api/hooks/useSearchParams) – handle filtering state

---

## ⚙️ Project Setup

```bash
git clone https://github.com/KirillSerg/orbiqtech-pipa-cycles-dashboard-kyrylo.git
cd orbiqtech-pipa-cycles-dashboard-kyrylo
npm install
```

## 🖥️ Available Scripts

- `npm run dev ` – start development server

## 📝 Technical decisions

- Use react Context like state manager to share data between components. It's alow do not pass data from paren to children in props (Props hell)
- A request to a fake API can pass parameters to return already filtered cycles. The data storage logic involves storing both all cycles (provided there are no filters in the request or the state of all cycles is empty) and filtered data. This data is stored in different state units. In this case, there are no duplicate requests and the user constantly works with current data from the server.
