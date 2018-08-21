import React, { Component } from 'react';
import InputBox from '../common/input-folder/InputBox.jsx';
import DropdownMenu from '../common/input-folder/DropdownMenu.jsx';
import './question-list.scss';
import * as QuestionAPI from '../../api/QuestionsAPI';

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
            },
						states: QuestionAPI.getState()
        }
    }
		componentDidMount() {
			// this.getState();
			// console.log(this.state.states);
			
		}

		getState() {
			let states = QuestionAPI.getState();
			this.setState({states});

		}
    handleSubmit = (event) => {
			console.log(this.state.answers);
			event.preventDefault();
			this.props.push(`/${answers}`);
    }
		handleInput(e,type) {
			let input = e.target.value;
			const answers = this.state.answers;
			answers[type] = input;
			
			this.setState({ answers });	
		}
    handleFullName(e,type) {
        let value = e.target.value;
        const answers = this.state.answers;
        if (type === "first") {
            answers.name.first = value;
        } else if (type === "last") {
            answers.name.last = value;
        }
        this.setState({ answers });				
    }
		handleAddress(e,type) {
			let address = e.target.value;
			const answers = this.state.answers;
			
			if (type === "street") {
				answers.address.street = address;
			} else if (type === "state") {
				answers.address.state = address;
			}
			this.setState({ answers });
		}
    render() {
			const { states } = this.state;
        return(
            <form className="form-container" onSubmit={ this.handleSubmit }>
								<InputBox type={'text'}
										required={true}
                    title={'ID'}
                    name={'id'}
                    value={this.state.answers.id}
                    placeholder={'Enter your ID...'}
                    handleChange={(e) => this.handleInput(e, "id")}/>
                <InputBox type={'text'}
                    title={'First Name'}
										required={true}
                    name={'name'}
                    value={this.state.answers.name.first}
                    placeholder={'Enter your first name...'}
                    handleChange={(e) => this.handleFullName(e,"first")}/>
                <InputBox type={'text'}
                    title={'Last Name'}
										required={true}
                    name={'name'}
                    value={this.state.answers.name.last}
                    placeholder={'Enter your last name...'}
                    handleChange={(e) => this.handleFullName(e,"last")}/>
								<InputBox type={'text'}
                    title={'Street'}
										required={true}
                    name={'street'}
                    value={this.state.answers.address.street}
                    placeholder={'Enter your street address...'}
                    handleChange={(e) => this.handleAddress(e,"street")}/>
								<DropdownMenu title={'State'}
										name={'state'}
										value={this.state.answers.address.state}
										placeholder={'Choose your state'}
										lists={states}
										handleChange={(e) => this.handleAddress(e,"state")} />
								<InputBox type={'text'}
                    title={'Title'}
										required={true}
                    name={'title'}
                    value={this.state.answers.title}
                    placeholder={'Enter your title...'}
                    handleChange={(e) => this.handleInput(e, "title")}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default QuestionList;