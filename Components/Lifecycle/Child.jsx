import React from "react";


class Child extends React.Component {
    
    componentDidMount() {
        console.log("Child Did mount is called");
    }
    componentWillUnmount(){
        console.log("Child did unmount");
    }
    render() {
        console.log("Child render is called")
        return (
            <div>
                <h3>Child</h3>
            </div>


        )
    }
}
export default Child