import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementButtonClickHandler = () => {
        console.log('click')
    }

    return (
        <>
            <h2>Counter</h2>

            <p>0</p>

            <button onClick={incrementButtonClickHandler}>+</button>
        
        </>
    )
}