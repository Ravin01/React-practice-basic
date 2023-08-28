import {Component} from "react";
class State extends Component{
    constructor(props){
        super(props)

        this.state={
            message : "Subscribe",
            click : "click me",
            bell : "Bell"
        }
    }
    ButtonChange=()=>{
        // this.setState({ quantity : value })
        this.setState({
            message : "Hit the bell button for Never miss an any update",
            click: "subscribed"
        })
    };
    Bell=()=>{
        this.setState({
            message : "Thankyou, Happy learning !",
            bell : "clicked"
        })
    }
    render(){
        return(
            <>
            <p>{this.state.message}</p>
            <button onClick={this.ButtonChange}>{this.state.click}</button>
            <br /><br />
            <button onClick={this.Bell} >{this.state.bell}</button>
            </>
        )
    }
}export default State;