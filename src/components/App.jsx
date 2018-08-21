import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Question from './Question.jsx';

import Loading from './Loading.jsx';

import './app.scss';


class App extends Component {
    render() {
		const loadableQuestionList = Loadable({
				loader: () => import('./question-list/QuestionList.jsx'),
				loading: Loading,
		})

		const loadableAnswerList = Loadable({
				loader: () => import('./answer-list/AnswerList.jsx'),
				loading: Loading,
		})
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
                        <Question />
                    )}
                    />
            </div>
        );
    }
}

export default App;