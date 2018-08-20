import React, { Component } from 'react';

class Question extends Component {
    constructor(props){
        super(props);
    }
    state = {
        answer: ''
    }
    onChange(event) {
        let answer = event.target.value;
        console.log(answer);
        
        // this.setState({answer});
    }
    render() {
        const { question } = this.props;
        return (
            <label className="question">
                <input type="text" name={question} onChange={this.onChange}/>
                {question}
            </label>
        );

    }
}

export default Question;