/* eslint-disable react/prop-types */
// import { Component} from "react";



// Functional Component
function Props({text, children}) {
    return ( 
        <>
        <h4>{text}</h4>
        <p>{children}</p>
        </>
     );
}



// Class component
// class Props extends Component{
//     render(){
//         return(
//             <>
//             <h4>{this.props.text}</h4>
//             <p>{this.props.children}</p>
//             </>
//         )
//     }
// }



// props validation
// Props.propTypes = {
//     text: propTypes.string.required
//   };

// export
export default Props;