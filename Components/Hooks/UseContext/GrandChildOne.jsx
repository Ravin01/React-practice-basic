import MyContext from "./MyContext";
import { useContext } from "react";

const GrandChildOne = () => {
    // eslint-disable-next-line no-unused-vars
    const [isSubscribe, setIsSubscribe] = useContext(MyContext);
    const handleButton=()=>{
        setIsSubscribe(true);
    }
    return (
        <div>
            <button onClick={handleButton}>{isSubscribe ? "Subscribed" : "Subscribe"}</button>
        </div>
    )
}
export default GrandChildOne