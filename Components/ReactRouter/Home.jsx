import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import { getApi } from "../CRUD/crud";
import { useEffect, useState } from "react";


const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(getApi);
        console.log(getApi)
    }, [])
    return (
        <div>
            {data.map((d, i)=> (
                <div key={i}>
                    <h1>{d.name}</h1>
                </div>
            ))}
            <h2>Home</h2>
            <Routes>

                <Route path="profile" element={<Profile />} />
            </Routes>
        </div>
    )
}
export default Home;