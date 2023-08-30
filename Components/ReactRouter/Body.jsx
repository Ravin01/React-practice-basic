import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";
import Name from "./Name";
import Id from "./Id";



const Body = () => {
    return (
        <div style={{
            backgroundColor: "#E74C3C",
            height: "80vh",
            width: "80vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Routes>
                <Route index  path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/:id" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile">
                    <Route path="" element={<Profile />}/>
                    <Route path="name" element={<Name />}/>
                    <Route path="id" element={<Id />}/>
                </Route>
                {/* default route */}
                <Route path="*" element={<Navigate to='/' replace/>}/>
            </Routes>

        </div>
    )
}
export default Body;