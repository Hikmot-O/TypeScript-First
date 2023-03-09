import React, { useState } from "react";
import Todo from "../models/todo";

type contextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<contextType>({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});
interface Props {
  children: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')]

  const addTodoHandler = (text: string) => {
    setTodos((formerTodos) => [...formerTodos, new Todo(text)]);
  };

  const deleteTodoHandler = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const contextValue: contextType = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
