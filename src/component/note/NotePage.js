/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import NoteCreationBox from './NoteCreationBox';
import NoteListBox from './NoteListBox';
import {Grid,Row,Col} from 'react-bootstrap';
import styles from './note.css';
class NotePage extends Component {
	render() {
		return (


				<Row className="show-grid">
					<Col xs={6} md={3} ><NoteListBox/></Col>
					<Col xs={12} md={9} id={styles.check_box}><NoteCreationBox/></Col>
				</Row>

		);
	}
}


export default NotePage;
