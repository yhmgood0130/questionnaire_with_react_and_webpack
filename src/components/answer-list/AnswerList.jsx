import React from 'react';
import './styles/answer-list.scss';

const AnswerList = ({location}) => (
    <div className="container-questions">
			<div className="container-header"><span>Questionnaire</span></div>
			<div className="container-answers">
				<h1>Summary</h1>
				<h2>ID</h2>
				<p>{location.state.id}</p>
				<h2>Name</h2>
				<h4>First</h4>
				<p>{location.state.name.first}</p>
				<h4>Last</h4>
				<p>{location.state.name.last}</p>
				<h2>Address</h2>
				<h4>State</h4>
				<p>{location.state.address.street}</p>
				<h4>State</h4>
				<p>{location.state.address.state}</p>
				<h2>Title</h2>
				<p>{location.state.title}</p>
			</div>
		</div>
)

export default AnswerList;