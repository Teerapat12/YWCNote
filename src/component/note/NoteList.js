/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import NoteItem from './NoteItem';
import styles from './note.css';
import {connect} from 'react-redux';
import {selectNote} from '../../actions/noteController';


class NoteList extends Component {

	render() {

		var noteList = this.props.noteList;
		return (
			<div className={styles.notelist}>
				{noteList.length>0? noteList.map((note,index)=>{
					if(index!=this.props.selectedNoteId)
						return <NoteItem note={note} key={index} noteIndex={index} />;
					else
						return <NoteItem note={note} key={index} noteIndex={index} selected/>;
				}) : <div>Loading</div>}

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

export default connect(mapStateToProps)(NoteList);
