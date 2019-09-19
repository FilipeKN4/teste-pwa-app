import React from 'react';
import HelloWorld from './helloWorld';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
        <div className="App">
            <HelloWorld name="Igor"/>
            <HelloWorld name="Hiroshi"/>
            <HelloWorld name="Toyoshima"/>
            <HelloWorld name="Dick"/>
        </div>
    </div>);
};

export default App;