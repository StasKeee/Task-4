import { useState, useEffect } from "react";

const CountdownTimer = () => {

    const [state, setState] = useState(10);

    useEffect(()=>{

        let interval;

        if (state) {
            interval = setInterval(()=>{
                setState((prev)=>{return prev - 1})
            }, 1000)
        }
     
        return () => {
            clearInterval(interval)
        }

    }, [state])

    return ( 
        <h1>
            Счётчик: {state}
        </h1>
     );
}
 
export default CountdownTimer;