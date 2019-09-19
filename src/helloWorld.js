import React, { Component } from 'react';
import './helloWorld.css';

class HelloWorld extends Component {
    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!!!
                <br/>
                <button onClick={this.change}>Change</button>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = { greeting : 'Hello modafoquing'};
        this.change = this.change.bind(this);
    }

    change() {
        if(this.state.greeting === 'Hello modafoquing') {
            this.setState({ greeting : 'Get out modafoquing'});
        } else {
            this.setState({ greeting : 'Hello modafoquing'});
        };
    }
};

export default HelloWorld;