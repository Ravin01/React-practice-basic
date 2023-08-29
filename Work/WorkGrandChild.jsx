import WorkContext from "./WorkContext"
import { useContext } from "react"
const WorkGrandChild = () => {
    const val = useContext(WorkContext)
    return (
        <div>
            <h4>GrandChild : {val}</h4>
        </div>
    )
}

export default WorkGrandChild