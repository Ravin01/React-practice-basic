// import {Component} from "react";

// Components
// import State from "../Components/PropsVsState/State";
// import Props from "../Components/PropsVsState/Props";
// import List from "../Components/List/List";
// import Condition from '../Components/ConditionalRender/Condition';
// import LifeCycle from '../Components/Lifecycle/LifeCycle';
// import UseEffect from '../Components/Hooks/UseEffect/UseEffect';
// import UseRef from '../Components/Hooks/useRef/UseRef';
// import Previous from '../Components/Hooks/useRef/previous';
import Parent from '../Components/Hooks/UseContext/Parent';
import { Provider } from '../Components/Hooks/UseContext/MyContext';
// import Home from '../Components/ReactRouter/Home';
// import Work from '../Work/Work';
// import WorkContext from '../Work/WorkContext';


// CSS
import './App.css';


// Functional Component
const App = () => {
  // const names = [
  //   {
  //     id : 1,
  //     name : "name1",
  //     age : 25
  //   },
  //   {
  //     id : 2,
  //     name : "name1",
  //     age : 20
  //   },
  //   {
  //     id : 3,
  //     name : "name1",
  //     age : 20
  //   },
  //   {
  //     id : 4,
  //     name : "name1",
  //     age : 12
  //   }
  // ]
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
      {/* <div>
          <List names = {names}/>
        </div> */}
      {/* Conditional Rendering */}
      {/* <Condition /> */}
      {/* LifeCycle */}
      <div>
        {/* <LifeCycle /> */}
      </div>
      <div>
        {/* <UseEffect /> */}
        {/* <UseRef /> */}
        {/* <WorkContext.Provider value={5}>  */}
          {/* <Work />  */}
        {/* </WorkContext.Provider> */}

        {/* <Previous /> */}
        {/* <MyContext.Provider value={10}>
          <Parent />
        </MyContext.Provider> */}
        <Provider >
          <Parent />
        </Provider>
        {/* <Home /> */}
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