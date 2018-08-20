import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionList from './question-list/QuestionList.jsx';

class Home extends Component {
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
    }
    handleSubmit() {
        
    }
    render() {
        const questions = [ "Id", "First Name", "Last Name", "Street", "State", "Title"];
        return(
            <div className="container-questions">
                <QuestionList />
                {/* <Link to='/answers'>Submit</Link> */}
            </div>            
        )
    }
};

export default Home;