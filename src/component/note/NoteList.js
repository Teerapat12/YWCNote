/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import NoteItem from './NoteItem';
import styles from './note.css';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modalController';
import {Button} from 'react-bootstrap';

class NoteList extends Component {

	renderPlaceHolder(){
		return(
			<div className={styles.emptynoteplaceholder}>
				<p>You have no note yet. Try adding new note!</p>
				<hr/>
				<Button bsStyle="success" className={styles.emptynoteaddbutton} onClick={()=>this.props.openModal('addNote')} block>Add new Note</Button>
			</div>
		)
	}

	render() {

		var noteList = this.props.noteList;
		return (
			<div className={styles.notelist}>
				{noteList.length>0? noteList.map((note,index)=>{
					if(index!=this.props.selectedNoteId)
						return <NoteItem note={note} key={index} noteIndex={index} />;
					else
						return <NoteItem note={note} key={index} noteIndex={index} selected/>;
				}) : this.renderPlaceHolder()}

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedNoteId: state.note.selectedNoteId,
		noteList: state.note.noteList
	};
}

export default connect(mapStateToProps,{openModal})(NoteList);
