import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const todoList = [
  {
    id: 1,
    task: "Complete Javascript Course",
    complete: false,
  },
  { id: 2, task: "Jog around the park 3x", complete: false },
  { id: 3, task: "10 minutes meditation", complete: false },
  { id: 4, task: "Read for 1 hour", complete: false },
  { id: 5, task: "Pickup groceries", complete: false },
  { id: 6, task: "Complete Todo App on Frontend Mentor", complete: false },
];

function App() {
  const [todos, setTodos] = useState(todoList);
  const [todo, setTodo] = useState("");

  function addTodo() {
    if (todo.trim() === "") return;
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), task: todo, complete: false },
    ]);
    setTodo("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App lusitana-regular min-h-screen">
      <Header todo={todo} setTodo={setTodo} onAddTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
