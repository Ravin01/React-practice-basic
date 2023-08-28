

// eslint-disable-next-line react/prop-types
function Work({text, children}) {
    return ( 
        <>
        <h2>{text}</h2>
        <p>{children}</p>
        </>
     );
}

export default Work;
 
