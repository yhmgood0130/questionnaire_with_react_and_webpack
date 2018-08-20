import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import path from 'path';

import * as QuestionsAPI from '../api/QuestionsAPI';

import Loading from './Loading.jsx';
import Home from './Home.jsx';

import './app.scss';
import QuestionList from './question-list/QuestionList.jsx';

let loadableQuestionList = Loadable({
    loader: () => import('./question-list/QuestionList.jsx'),
    loading: Loading,
})

let loadableAnswerList = Loadable({
    loader: () => import('./answer-list/AnswerList.jsx'),
    loading: Loading,
})

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        questions: []
    }
    componentDidMount() {
        this.loadQuestions();
    }

    loadQuestions() {
        let obj = QuestionsAPI.getAll();
        this.setState({ questions: obj });
    }
    render() {
        return (
            <div className="app">
                <Route
                    path='/questions'
                    component={loadableQuestionList}
                    />
                <Route
                    path='/answers'
                    component={loadableAnswerList}
                    />
                <Route
                    path='/'
                    exact={ true }
                    render={ () => (
                        <Home questions={ this.state.questions } />
                    )}
                    />
            </div>
        );
    }
}

export default App;