import { useEffect, useState } from "react"

export default function Effect(){
    const[count, setCount] = useState(0);
    const[decaCount, setDecaCount] = useState(0);

    useEffect(() => {
        console.log('Initial Render / Component mount');
   }, []);

   useEffect(() => {
        console.log('Update Counter')
    }, [count]);

    useEffect(() => {
        console.log('Update deca count');
    }, [decaCount]);

    useEffect(() => {
        return () => {
            //Clean up function
            console.log('Component unmount');
        }
    }, []);

    const onClick = () => {
        setCount(prevCount => prevCount + 1);
        if (count % 10 == 0 && count !==0 ) {
            setDecaCount(prevValue => prevValue +1)
        }
    }
    
    return (
        <>
        <h2>Effect</h2>
        <div>{count}</div>
        <button onClick={onClick}>+</button>
        </>
    );
};