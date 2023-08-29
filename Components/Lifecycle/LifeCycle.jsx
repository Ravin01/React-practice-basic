import React from "react";
import Child from "./child";

class LifeCycle extends React.Component {
    constructor() {
        super();
        console.log("constructor is called");
        this.state = {
            msg: "hello",
            button: "click me",
            show : false 
        }
    }
    componentDidMount() {
        console.log("Did mount is called");
    }
    componentDidUpdate() {
        console.log("Did update is called");
    }
    shouldComponentUpdate() {
        console.log("should component is called");
        return true;
    }

    event = () => {
        this.setState({
            msg: "i am updated",
            button: "clicked"
        })
    }

    showChild=()=>{
        this.setState({...this.state, show : true})
    }
    hideChild=()=>{
        this.setState({...this.state, show : false})
    }
    render() {
        console.log("render is called")
        return (
            <div>
                <h3>Lifecycle Methods</h3>
                <p>{this.state.msg}</p>
                <button onClick={this.event}>{this.state.button}</button>
                <br />
                <br />
                <button onClick={this.showChild}>Show</button>
                <button onClick={this.hideChild}>Hide</button>
                <br />
                <br />
                {this.state.show && <Child />}
            </div>


        )
    }
}
export default LifeCycle