import logo from './logo.svg';
import './App.css';
import React from 'react';
import ChildCompoent from './childComponent';
import ComponentDidMountMethod from './componentDidMountMethod';

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name: "Constructor Method"
  //   }
  // }
  render() {
    return (
      <div className="App">
       <ChildCompoent nameFromFromParent = {"getDerivedStateFromProps"} />
       <ComponentDidMountMethod />
      </div>
    );
  }
}

export default App;
