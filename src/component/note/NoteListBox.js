/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import NoteSearchMenu from './NoteSearchMenu';
import NoteList from './NoteList';
import styles from './note.css';

class NoteListBox extends Component {
	render() {
		return (
			<div id={styles.list_box}>
				<NoteSearchMenu />
				<NoteList/>
			</div>
		);
	}
}


export default NoteListBox;
