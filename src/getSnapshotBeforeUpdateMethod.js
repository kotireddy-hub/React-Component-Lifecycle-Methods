import React from "react";

export class GetSnapshotBeforeUpdateMethod extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:"Constructor Method"
        }
    }
    componentDidMount(){

        setTimeout( () => {
            this.setState({
                name: "componentDidMount Method"
            })
        },5000)
    }

    getSnapshotBeforeUpdate(prvProps, prvState){

        document.getElementById('previous-state').innerHTML = " The previous State"+ prvState.name;
    }

    render(){
        return <div>
            {
                this.state.name
            }
            <p id="previous-state"></p>
        </div>
    }


}