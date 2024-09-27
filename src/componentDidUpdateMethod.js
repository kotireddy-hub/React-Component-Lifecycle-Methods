import React from "react";

export class ComponentDidUpdateMountMethod extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:"from previous state"
        }
    }
    componentDidMount(){

        setTimeout( () => {
            this.setState({
                name: "to current State"
            })
        },5000)
    }

    componentDidUpdate(prvState){
        if(prvState.name !== this.state.name){
            document.getElementById("current-state").innerHTML = "Yes the state is changed"
        }

    }

    render(){
        return <div>
            {
                this.state.name
            }
            <p id="current-state"></p>
        </div>
    }


}