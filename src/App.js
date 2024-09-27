import logo from './logo.svg';
import './App.css';
import React from 'react';
import ChildCompoent from './childComponent';
import ComponentDidMountMethod from './componentDidMountMethod';
import { ShouldComponentUpdateMethod } from './shouldComponentUpdateMethod';
import { GetSnapshotBeforeUpdateMethod } from './getSnapshotBeforeUpdateMethod';
import { ComponentDidUpdateMountMethod } from './componentDidUpdateMethod';
import { ComponentWillUnmountMethod } from './componentWillUnmountMethod';

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
       <ShouldComponentUpdateMethod /> 
        <GetSnapshotBeforeUpdateMethod />
       <ComponentDidUpdateMountMethod />
       <ComponentWillUnmountMethod />
      </div>
    );
  }
}

export default App;
