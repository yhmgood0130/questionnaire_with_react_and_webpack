import React from 'react';
import PropTypes from 'prop-types';
import './input-box.scss';

const propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	handleChange	: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	required: PropTypes.bool
};

const defaultPropTypes = {
	required: false
} 

const InputField = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label"><strong>{props.title}</strong></label>
						<br />
            <input 
                className={`form-input`}
								required={props.required}
								style={props.styling}
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    );
}

InputField.propTypes = propTypes;
InputField.defaultPropTypes = defaultPropTypes;

export default InputField;