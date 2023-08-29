import { useContext } from "react";
import WorkContext from "./WorkContext";


const Rough = () => {
    const val = useContext(WorkContext)
    return (
        <div>
            <h1>Rough : {val}</h1>
        </div>
    )
}

export default Rough