import { useState } from "react";

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter => counter + 1);
    }

    const decreaseCounter = () => {
        setCounter(counter => counter - 1);
    }


    return (
        <div>
            <h1>Counter here</h1>
            <button onClick={() => increaseCounter()}>+</button>
            <p>{counter}</p>
            <button onClick={() => decreaseCounter()}>-</button>


        </div>
    );

};