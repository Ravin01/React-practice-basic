import { useEffect, useState } from "react"

const ChilduseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Mounting phase
        let myInterval = setInterval(() => {
            // updating phase
            console.log("interval is running");
            setCount(count + 1)
        }, 1000)
        return()=>{
            // unmounting phase
            clearInterval(myInterval)
        }
    }, [count])
    return (
        <>
            <h4>Child useEffect - {count}</h4>
        </>
    )
}
export default ChilduseEffect;