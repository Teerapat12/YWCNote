/**
 * Created by Teerapat on 11/23/2016.
 */
import React,{Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import {Button} from 'react-bootstrap';

class AddNoteModal extends Component{

	constructor(props) {
		super(props);
	}

	render(){

		return (
			<div>
			<Modal show={this.props.showModal} onHide={this.props.close}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Text in a modal</h4>
					<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>


				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.close}>Close</Button>
				</Modal.Footer>
			</Modal>
				</div>
		)
	}


}

export default AddNoteModal;
