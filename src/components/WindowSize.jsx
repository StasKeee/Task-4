import { useState, useEffect } from "react";

const WindowSize = () => {

    const [state, setState] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    const handleResize = () => {
        setState({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return ( 
        <h2>
            Текущий размер окна {state.width} пикселей на {state.height}
        </h2>
     );
}
 
export default WindowSize;