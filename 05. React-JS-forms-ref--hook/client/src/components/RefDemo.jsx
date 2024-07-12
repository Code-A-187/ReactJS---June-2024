import { useEffect, useState, useRef } from "react";


export default function RefDemo() {
    const [counter, setCounter] = useState(0);
    const initialRenderRef = useRef(true)
    console.log('Render ref Demo')

        useEffect(() => {
            if (initialRenderRef.current) {
                console.log('Initiali render');
                initialRenderRef.current = false;
            } else {
                console.log('Update only!')
            }  
        }, [counter]);

    return (
        <>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter(c => c + 1)}>+</button>
            <button onClick={() => initialRenderRef.current = true}>Reset</button>
        </>
       

   );
}