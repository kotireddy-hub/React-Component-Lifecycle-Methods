import React, { Component } from "react";

class ChildCompoent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "this child compoent"
        }
    }

    static getDerivedStateFromProps(props,state){
        return {
            name:props.nameFromFromParent
        }
    }

    render(){
        return <div>
                {this.state.name}
        </div>
    }



}

export default ChildCompoent;