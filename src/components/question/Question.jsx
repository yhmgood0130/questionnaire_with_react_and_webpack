import React, { Component } from 'react';
import QuestionList from './question-list/QuestionList';
import './styles/question.scss';

const Question = () => (
		<div className="container-questions">
			<div className="container-header"><span>Questionnaire</span></div>
			<QuestionList />
		</div>
);

export default Question;