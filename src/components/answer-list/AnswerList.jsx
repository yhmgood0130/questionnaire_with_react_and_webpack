import React from 'react';
import './styles/answer-list.scss';

const AnswerList = ({location}) => (
    <div className="container-questions">
			<div className="container-header"><span>Questionnaire</span></div>
			<div className="container-answers">
				<h2>Summary</h2>
				<h3>ID</h3>
				<p>{location.state.id}</p>
				<h3>Name</h3>
				<h4>First</h4>
				<p>{location.state.name.first}</p>
				<h4>Last</h4>
				<p>{location.state.name.last}</p>
				<h3>Address</h3>
				<h4>State</h4>
				<p>{location.state.address.street}</p>
				<h4>State</h4>
				<p>{location.state.address.state}</p>
				<h3>Title</h3>
				<p>{location.state.title}</p>
			</div>
		</div>
)

export default AnswerList;