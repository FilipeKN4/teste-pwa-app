import React from 'react';
import HelloWorld from './helloWorld';
import Cam from './Cam';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
        <div className="App">
            <HelloWorld name="Igor"/>
            <HelloWorld name="Hiroshi"/>
            <HelloWorld name="Toyoshima"/>
            <HelloWorld name="Dick"/> 
            <Cam />
        </div> 
    </div>);
};

export default App;