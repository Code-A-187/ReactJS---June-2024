import { useState } from "react";

export default function Timer () {

    const [time, setTime] = useState(0)  // Read only
    
    // console.log(stateArr)
    // let count = stateArr[0]
    // let setCount = stateArr[1]

    setTimeout(() => {
        setTime(oldTime => oldTime + 1)
    }, 1000);


    return (
        <>
            <h2>Timerr</h2>

            <p>{time}</p>
        </>
    )
}