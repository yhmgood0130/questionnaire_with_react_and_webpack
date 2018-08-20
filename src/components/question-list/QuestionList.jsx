import React, { Component } from 'react';
import Input from './Input.jsx';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: {
                id: "",
                name: {
                    first: "",
                    last: ""
                },
                address: {
                    street: "",
                    state: ""
                },
                title: ""
            }
        }
        this.handleFullName = this.handleFullName.bind(this);
    }
    handleSubmit() {
        
    }
    handleFullName(e,type) {
        let value = e.target.value;
        const arr = this.state.answers.name;
        if (type === "first") {
            arr.first = value;
        } else {
            arr.last = value;
        }
        this.setState(prevState => ({ answers: 
            {...prevState.answers.name, name: arr}
        }), () => console.log(this.state.answers.name))
    }
    render() {
        return(
            <form className="list-questions" onSubmit={ this.handleSubmit }>
                <Input type={'text'}
                    title={'First Name'}
                    name={'name'}
                    value={this.state.answers.name.first}
                    placeholder={'Enter your first name'}
                    handleChange={(e) => this.handleFullName(e,"first")}/>
                <Input type={'text'}
                    title={'Last Name'}
                    name={'name'}
                    value={this.state.answers.name.last}
                    placeholder={'Enter your last name'}
                    handleChange={(e) => this.handleFullName(e,"last")}/>
                {/* <QuestionList questions={ questions } answers={ this.state.answers }/> */}
                {/* <Link to='/answers'>Submit</Link> */}
            </form>
        )
    }
}

export default QuestionList;