import { useEffect, useState } from "react";
import { Todo } from "../todo/Todo";
// import { Todo as TodoInterface } from "../../interfaces/Todo";
import { todosService } from "../../services/TodoService";

export const Todos = () => {

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        todosService.getAllTodos()
            .then(result => setTodos(result))
            .finally(() => setIsLoading(false))
    }, [])


    return (
        <>
            <h1>Todo here:</h1>
            {isLoading && <p>Loading...</p>}

            {!isLoading && todos.length > 0 && todos.map(x => <Todo todo={x} key={x['id']} />)}
        </>
    );
};