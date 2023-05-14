import styles from "./Todo.module.css";
import { Todo as TodoInterface } from "../../interfaces/Todo";
import { useState } from "react";

interface TodoProps {
    todo: TodoInterface
}


export const Todo = (props: any) => {

    const [status, setStatus] = useState(false);

    const changeStatus = () => {
        setStatus(true);
    }


    const redirectToLogin = ()=> {
        
    }
    return (
        <div className={`${styles.todoClass} ${styles.todoBorder}`}>
            <h2 className={status ? styles.completed : ''}>Title: {props.todo.title} </h2>
            <p>Status: {status ? 'Completed' : 'Not Completed'}</p>
            <button onClick={changeStatus}>Set Todo as completed</button>
            <button onClick={redirectToLogin}>Show detauls:</button>

        </div>
    )

}
