import { useState } from "react"
import './Counter.css'
import KillCounter from "./KillCounter";

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

    let countText = `Positive ${count}`;
    let color = 'green'

    if (count < 0) {
        countText = `Negative ${count}`;
        color = 'red'
    }

    const enableIncrementButton = count < 10; 



    return (
        <>
            <h2>Counter</h2>

            <KillCounter count={count}/>

            <p style={{color}} className={count < 0 ? 'negative-text' :'positive-text'}
            > 
                {countText}
            </p>

            <button onClick={decrementButtonClickHandler}>-</button>
            <button onClick={resetButtonClickHandler}>0</button>
            {enableIncrementButton && <button onClick ={incrementButtonClickHandler}>+</button>}
        </>
    )
}