import MyContext from "./MyContext";
import { useContext } from "react";


const GrandChildTwo = () => {
    // const value = useContext(MyContext)
    // eslint-disable-next-line no-unused-vars
    const [isSubscribe, setIsSubscribe] = useContext(MyContext);
    return (
        <div>
            {/* <h4>GrandChildTwo : {value}</h4> */}
            {isSubscribe ? 
        <h4 style={{
            color : 'green'
        }}>
            Thanks a lot !
        </h4>    
        : 
        <h4 style={{
            color : 'red'
        }}>Please Subscribe</h4>
        }
        </div>
    )
}
export default GrandChildTwo