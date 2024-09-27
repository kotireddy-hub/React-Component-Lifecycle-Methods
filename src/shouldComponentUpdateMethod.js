import React from "react";

export class ShouldComponentUpdateMethod extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:"ShouldComponentUpdateMethod"
        }
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidMount(){

        setTimeout( () => {
            this.setState({
                name: "componentDidMount Method"
            })
        },5000)
    }

    render(){
        return <div>
            {
                this.state.name
            }
        </div>
    }


}