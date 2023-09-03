import { useEffect, useState } from "react"
import { getSingleUser } from "../../crud";
import { useParams } from "react-router-dom";


const Id = () => {
    const { id } = useParams();
    const [singleData, setSingleData] = useState({
        "name": " ",
        "email": " ",
        "age": " ",
        "designation": " ",
        "package": " ",
        "id": " "
    },);
    const getSingleData = async () => {
        const response = await getSingleUser(id);
        setSingleData(response)
    }
    useEffect(() => {
        getSingleData()
    }, [])
    return (
        <div>
            <h4>Id</h4>
            <h3>{singleData.name}</h3>
            <h3>{singleData.age}</h3>
            <h3>{singleData.email}</h3>
        </div>
    )
}

export default Id