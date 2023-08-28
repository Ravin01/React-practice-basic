// import {Component} from "react";

// Components
// import State from "../Components/PropsVsState/State";
// import Props from "../Components/PropsVsState/Props";
import List from "../Components/List/List";



// CSS
import './App.css';


// Class Component
const App = ()=> {
  const names = [
    {
      id : 1,
      name : "name1",
      age : 25
    },
    {
      id : 2,
      name : "name1",
      age : 20
    },
    {
      id : 3,
      name : "name1",
      age : 20
    },
    {
      id : 4,
      name : "name1",
      age : 12
    }
  ]
    return (
      <>
        {/* Props and states */}
        {/* <div>
          <h2>Welcome, I am State</h2>
          <State />
          <div>
            <h2>Hello, I am props</h2>
            <Props text="I am rendering from a parent component" >
              <p>child</p>
            </ Props>
          </div>
        </div> */}
        {/* List rendering */}
        <div>
          <List names = {names}/>
        </div>
      </>
    )
}


// Functional Component
// const App = ()=>{
//   return(
//     <>

//     </>
//   )
// }


export default App;