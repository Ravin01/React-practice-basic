const Nav = () => {
    return (
        <div style={{
            backgroundColor: "black",
            height: "50px",
            width: "80vw"
        }}>
            <ul style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "50px"
            }}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
        </div>
    )
}
export default Nav