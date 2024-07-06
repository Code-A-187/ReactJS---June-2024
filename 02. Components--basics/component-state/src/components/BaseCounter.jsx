import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementButtonClickHandler = () => {
        setCount (oldCount => oldCount + 1);
    }

    const resetButtonClickHandler =  () => {
        setCount(0)
    }

    const decrementButtonClickHandler = () => {
        setCount(oldCount => oldCount- 1);
    }

    return (
        <>
            <h2>Counter</h2>

            <p>{count}</p>

            <button onClick={decrementButtonClickHandler}>-</button>
            <button onClick={resetButtonClickHandler}>0</button>
            <button onClick ={incrementButtonClickHandler}>+</button>
        </>
    )
}