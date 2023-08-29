import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [text, setText] = useState('');
    const inRef = useRef()
    const handleEvent = () => {
        // const inRef = {current : {}} like an object
        console.log(inRef.current.value);
        setText(inRef.current.value)
        inRef.current.value = ""

    }
    const handleFocus=()=>{
        inRef.current.focus()
    }
    useEffect(() => {
        console.log("component rendered");
       
    }, [])
    return (
        <div>
            <div>
                <input type="text" ref={inRef} /> {/*ref attribute */}
                <p>{text}</p>
            </div>
            <br />
            <br />
            <button onClick={handleEvent}>Submit</button>
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default UseRef;