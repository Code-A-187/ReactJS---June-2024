import { useState } from "react";

export default function Counter () {

    const [count, setCount] = useState(0)  // Read only
    
    // console.log(stateArr)
    // let count = stateArr[0]
    // let setCount = stateArr[1]

    setTimeout(() => {
        setCount(oldState => oldState + 1)
    }, 1000);


    return (
        <>
            <h2>Counter</h2>

            <p>{count}</p>
        </>
    )
}