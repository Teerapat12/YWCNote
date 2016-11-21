/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import NoteItem from './NoteItem';
import styles from './note.css';

class NoteList extends Component {
	render() {
		var sampleNoteObj = {
			noteTitle: 'My First Note',
			noteDetail: 'This is my first note, bla bla blu bepi spdjafp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas'
		};
		return (
			<div className={styles.notelist}>
				<NoteItem note={sampleNoteObj}/>
				<NoteItem note={sampleNoteObj}/>
				<NoteItem note={sampleNoteObj} selected/>
				<NoteItem note={sampleNoteObj}/>
				<NoteItem note={sampleNoteObj}/>
				<NoteItem note={sampleNoteObj}/>
				<NoteItem note={sampleNoteObj}/>
				<NoteItem note={sampleNoteObj}/>
				<NoteItem note={sampleNoteObj}/>
			</div>
		);
	}
}


export default NoteList;
