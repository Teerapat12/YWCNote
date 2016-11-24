/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component ,PropTypes} from 'react';
import styles from './note.css';
import RichTextEditor from 'react-rte';
import {connect} from 'react-redux';
import {editNote,saveNote} from '../../actions/noteController';
import {Button} from 'react-bootstrap';
import InlineEdit from 'react-edit-inline';



class NoteCreationBox extends Component {
	static propTypes = {
		onChange: PropTypes.func
	};

	state = {
		value: RichTextEditor.createEmptyValue(),
		message:'test'
	}

	componentDidUpdate(prevProps){
		if(prevProps.selectedNoteId!=this.props.selectedNoteId){
			//Changing to new Note

			//Save old

			//Change to new
			this.setState({value:RichTextEditor.createValueFromString(this.props.editingNote.noteDetail,'html')});
		}
	}

	onChange = (value) => {
		this.setState({value});
		this.props.editNote(value.toString('html'));
		if (this.props.onChange) {
			// Send the changes up to the parent component as an HTML string.
			// This is here to demonstrate using `.toString()` but in a real app it
			// would be better to avoid generating a string on each change.
			this.props.onChange(
				value.toString('html')
			);
		}
	};

	dataChanged(data) {
		// data = { description: "New validated text comes here" }
		// Update your model from here
		console.log(data);
		this.setState({message:data.message})
	}

	customValidateText(text) {
		return (text.length > 0 && text.length < 64);
	}


	render() {
		if(this.props.selectedNoteId!=-1)
			return (
				<div>
					<h2 className={styles.noteTitleText}>{this.props.editingNote.noteTitle}</h2>

					<InlineEdit
						validate={this.customValidateText.bind(this)}
						activeClassName="editing"
						text={this.state.message}
						paramName="message"
						change={this.dataChanged.bind(this)}
					/>

					<Button onClick={()=>this.props.saveNote()} bsStyle="success"  className={styles.savebutton+" "+styles.right}>Save Note</Button>
					<div className={styles.notecreationbox}
					>
						<RichTextEditor
							value={this.state.value}
							placeholder={"Type your note here."}
							onChange={this.onChange.bind(this)}
						/>
					</div>
				</div>
			);
		else{
			return(
				<div className={styles.placeHolderDiv}>
					<h2 className={styles.noteTitleText}>Please select note(s) on the left to start editing!</h2>
				</div>
			)
		}
	}
}


function mapStateToProps(state) {
	return {
		editingNote:state.note.editingNote,
		selectedNoteId:state.note.selectedNoteId
	};
}


export default connect(mapStateToProps,{editNote,saveNote})(NoteCreationBox);
