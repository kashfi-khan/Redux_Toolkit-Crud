import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useCallback, useState } from "react";

function App() {
  const [editTodo, setEditTodo] = useState(null);

  const editHandle = (todo) => {
    setEditTodo(todo);
  };
  return (
    <>
      <h1 className="text-2xl text-slate-950">Learn redux</h1>
      <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
      <Todos onEdit={editHandle} />
    </>
  );
}

export default App;
