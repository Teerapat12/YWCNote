/**
 * Created by Teerapat on 11/23/2016.
 */
import React,{Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import {connect} from 'react-redux';
import {Button,FormControl} from 'react-bootstrap';
import {addNote} from '../../actions/noteController';


class AddNoteModal extends Component{

	constructor(props) {
		super(props);
		this.state = {
			value:''
		}
	}

	handleChange(e){
		this.setState({value:e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		this.addingNote();
	}

	addingNote(){
	console.log(this.state.value);
		this.setState({value:''});
		this.props.addNote(this.state.value);
		this.props.close();
	}

	render(){

		return (
			<div>
			<Modal show={this.props.showModal} onHide={this.props.close}>
				<Modal.Header closeButton>
					<Modal.Title>Add Note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Enter your Note Title</p>
					<form onSubmit={this.handleSubmit.bind(this)}>
					<FormControl
						type="text"
						value={this.state.value}
						placeholder="Note Title"
						bsSize='lg'
						onChange={this.handleChange.bind(this)}
					/>
						</form>

				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.addingNote.bind(this)}>Add</Button>
					<Button onClick={this.props.close}>Close</Button>
				</Modal.Footer>
			</Modal>
				</div>
		)
	}


}

export default connect(null,{addNote})(AddNoteModal);
