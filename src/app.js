import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return <p>Hello darkness smile old friend...</p>;
    }
}

render(<App />, document.getElementById("root"));