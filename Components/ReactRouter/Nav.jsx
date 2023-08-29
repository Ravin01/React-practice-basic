// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

const Nav = () => {
    const style={
        cursor : "pointer"
    }
    return (
        <div style={{
            height: "50px",
            width : "50vw",
            background : "black"
        }}>
            <ul style={{
                height : "50px",
                display : "flex",
                justifyContent : "space-evenly",
                alignItems : "center",
                listStyle : "none"
            }}>
                <li style={style}>Home</li>
                <li style={style}>About</li>
                <li style={style}>Contact</li>
            </ul>
        </div>
    )
}
export default Nav;