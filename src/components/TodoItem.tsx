import React from "react";
import classes from './TodoItem.module.css';

const TodoItem:React.FC<{text:string; onDelete: (event: React.MouseEvent) => void}> = (props) => {
    // const deleteTodoHadler = (id: string) =>{}
  return <li onClick={props.onDelete} className={classes.item}>{props.text}</li>;
};

export default TodoItem;
