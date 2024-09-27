import React from "react";

export class ComponentWillUnmountMethod extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return <div>
            <p> {this.state.show ?  <Child />: null}</p>
            <button onClick={ () => { this.setState ( {
                show: !this.state.show
            })}}>Click Me</button>
        </div>
    }
}


export class Child extends React.Component {

    componentWillUnmount() {
        alert(" this will unmount")
    }
    render() {
        return <div>
            I am child component
        </div>
    }

}