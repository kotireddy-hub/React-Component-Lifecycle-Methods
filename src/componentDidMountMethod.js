import React, { Component } from "react";


const API_URL = "https://jsonplaceholder.typicode.com/users";
export default class ComponentDidMountMethod extends Component{

    constructor(props){
        super(props);
        this.state = {
           // name: "this name will change in 5 sec"
           data:[]
        }
    }

    /* fetch (url).then().then() */
    componentDidMount(){
        // setTimeout(() => {
        //   this.setState( {
        //     name:"This is a componentDidMount Method"
        //   })  
        // }, 5000);
        fetch(API_URL)
        .then( (response) => response.json())
        .then( data => this.setState( {
          data:data
        }))
    }

    render(){
      //console.log(this.state.data,";;; ============")
      const { data = [] } = this.state
       return <div>
        {/* <p>{this.state.name}</p> */}
        {
          (data)?.map( (d) => {
            const { id , name} = d || {};
            return <p key={id}>{name}</p>
          }
          )
        }
       </div> 
    }

}