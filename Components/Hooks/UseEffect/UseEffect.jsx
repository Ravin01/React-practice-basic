import { useEffect, useState } from "react";
import ChilduseEffect from "./ChilduseEffect";
const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(20);
    const [isChild, setIsChild] = useState(false);

    const handle = () => {
        console.log("Increment is called");
        setCount(count + 1)
    };

    const handleAge = () => {
        console.log("Age is called");
        setAge(age + 1)
    };
    const showChild=()=>{
        setIsChild(true);
    }

    const hideChild=()=>{
        setIsChild(false);
    }
    useEffect(() => {
        console.log("Fetch from database..");
    }, [age, count])
    return (
        <>
            <h3>useEffect</h3>
            <button onClick={handle}>Increment</button>
            <button onClick={handleAge}>Age</button>
            <button onClick={showChild}>Show</button> 
            <button onClick={hideChild}>Hide</button>
            {isChild && <ChilduseEffect />}
        </>
    );
}

export default UseEffect;