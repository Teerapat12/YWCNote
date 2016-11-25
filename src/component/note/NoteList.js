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
				<Button bsStyle="primary" className={styles.emptynoteaddbutton} onClick={()=>this.props.openModal('addNote')} block>Add new Note</Button>
			</div>
		)
	}

	shouldRenderNote(note){
		var query =  this.props.note_query;
		var {noteTitle,noteDetail} = note;
		return (noteTitle.includes(query))||(noteDetail.includes(query));
	}

	render() {

		var noteList = this.props.noteList;
		return (
			<div className={styles.notelist}>
				{noteList.length>0? noteList.map((note,index)=>{
					if(this.shouldRenderNote(note)) {
						if (index != this.props.selectedNoteId)
							return <NoteItem note={note} key={index} noteIndex={index}/>;
						else
							return <NoteItem note={note} key={index} noteIndex={index} selected/>;
					}
					else{
						return <div key={index}></div>
					}
				}) : this.renderPlaceHolder()}

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		selectedNoteId: state.note.selectedNoteId,
		noteList: state.note.noteList,
		note_query  : state.note.note_query
	};
}

export default connect(mapStateToProps,{openModal})(NoteList);
