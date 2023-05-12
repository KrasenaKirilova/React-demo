import { useState } from "react";

export const Timer = () => {

    const [timer, setTimer] = useState(0);

    const [randomNumber, setRandomNumber] = useState(0);

    setTimeout(() => {

        setTimer(timer + 1);
        setRandomNumber(Math.random());
    }, 1000);


    return (
        <div>
            <h1>Timer : {timer}</h1>
            <p>Random: {randomNumber.toFixed(2)}</p>

        </div>

    )
}