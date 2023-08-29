function Condition() {
    let isLoggedIn = false;
    return ( 
        <>
        {/* short hand operator/short circuit operator */}
        {/* {isLoggedIn && <h3>Welcome Name</h3>} */}

        
        {/* ternary operator */}
        {isLoggedIn ? <h3>Welcome Name</h3> : <h3>Welcome guest</h3>}
        </>
     );
}

export default Condition;