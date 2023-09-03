// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

import {  NavLink } from "react-router-dom";

const Nav = () => {
    const style={
        cursor : "pointer"
    }
    return (
        <div style={{
            height: "50px",
            width : "94vw",
            background : "black"
        }}>
            <ul style={{
                height : "50px",
                display : "flex",
                justifyContent : "space-evenly",
                alignItems : "center",
                listStyle : "none"
            }}>
                <li style={style}>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li style={style}>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li style={style}>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li style={style}>
                    <NavLink to={"/edit"}>Profile</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Nav;