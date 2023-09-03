
// import { getApi } from "../CRUD/crud";
import { useEffect, useState } from "react";
import { getUser } from "../../crud";
// import { createApi } from "../../crud";
// import { createApi } from "../CRUD/crud";
import {deleteUser} from "../../crud";
import { Link } from "react-router-dom";
const Home = () => {
    const [data, setData] = useState([])
    const getData = async()=>{
        const response = await getUser();
        setData(response);
    }
    useEffect(() => {
        getData();
    }, []);
    const handleDelete = async(id)=>{
        await deleteUser(id);
        const updateData = data.filter(({deleteId}) => id !== deleteId);
        setData(updateData)
    }
    return (
        <div style={{
            display : "flex",
            flexWrap : "wrap",
            overflowY : "scroll"
        }}>
            {data.map((d, i) => (
                <div key={i} style={{
                    height : "250px",
                    width : "250px"
                }}>
                    <h2>{d.name}</h2>
                    <h2>{d.id}</h2>
                    <button>
                        <Link to={`/${d.id}`}>View</Link>
                    </button>
                    <button>
                        <Link to={`/edit?id=${d.id}`}>Update</Link>
                    </button>
                    <button onClick={()=>handleDelete(d.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Home;