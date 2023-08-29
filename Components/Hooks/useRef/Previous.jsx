import { useEffect, useRef, useState } from "react";

const Previous = () => {
    const [text, setText] = useState('')
    const inRef = useRef();
    useEffect(() => {
        console.log("text", text)
        console.log("inRef", inRef);
        inRef.current = text
    }, [text])
    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} />
            </div>
            <h4>Current value : {text}</h4>
            <h4>Previous value : {inRef.current}</h4>
        </div>
    )
}

export default Previous;