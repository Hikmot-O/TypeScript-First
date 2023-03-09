import React, {useContext} from "react";
// import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from './Todos.module.css';

// <{ items: Todo[]; onDelete: (id: string) => void }>
const Todos: React.FC = (props) => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.todos.map((item) => (
        <TodoItem onDelete={todoCtx.removeTodo.bind(null, item.id)} key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
