import React from 'react';
import PropTypes from 'prop-types';
import './styles/dropdown-menu.scss';

const propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	handleChange	: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	lists: PropTypes.object.isRequired
};

const defaultProps = {
	placeholder: ''
};

const DropdownMenu = (props) => {
	const stateList = () => {
		return Object.keys(props.lists).map((list,i) => <option key={i} value={list}>{props.lists[list]}</option>)
	}
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label"><strong>{props.title}</strong></label>
						<br />
            <select readOnly={false} value={props.value} onChange={props.handleChange}>
							{stateList()}
						</select>
        </div>
    );
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;