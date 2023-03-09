// import { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
// import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-context";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')]

  // const addTodoHandler = (text: string) => {
  //   console.log("yayy!!");
  //   setTodos((formerTodos) => [...formerTodos, new Todo(text)]);
  // };

  // const deleteTodoHandler = (id: string) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);

  //   setTodos(newTodos);
  // };
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
      {/* <NewTodo onAddTodo={addTodoHandler} />
      <Todos onDelete={deleteTodoHandler} items={todos} /> */}
    </TodosContextProvider>
  );
}

export default App;
