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
  const [darkTheme, setDarkTheme] = useState(true);
  const [isfading, setIsFading] = useState(false);

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

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  }

  function handleClear() {
    setTodos(todos.filter((todo) => !todo.complete));
  }

  function changeTheme() {
    setIsFading(true);
    setTimeout(() => {
      setDarkTheme(!darkTheme);
      setIsFading(false);
    }, 200);
  }

  document.body.style.backgroundColor = darkTheme
    ? "hsl(235,21%,11%)"
    : "hsl(236,33%,92%)";

  return (
    <div className="w-full h-full josefin-regular min-h-screen text-xs min-[360px]:text-sm min-[414px]:text-lg md:text-3xl lg:text-lg">
      <Header
        todo={todo}
        setTodo={setTodo}
        onAddTodo={addTodo}
        onChangeTheme={changeTheme}
        darkTheme={darkTheme}
        isFading={isfading}
      />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onComplete={toggleComplete}
        onClear={handleClear}
        darkTheme={darkTheme}
      />
    </div>
  );
}

export default App;
