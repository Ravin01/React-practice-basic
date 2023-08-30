import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Routes>

                <Route path="profile" element={<Profile />} />
            </Routes>
        </div>
    )
}
export default Home;