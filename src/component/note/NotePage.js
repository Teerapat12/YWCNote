/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import NoteCreationBox from './NoteCreationBox';
import NoteListBox from './NoteListBox';
import {Grid,Row,Col} from 'react-bootstrap';
import styles from './note.css';
import { RouteTransition } from 'react-router-transition';

class NotePage extends Component {
	render() {
		return (

			<RouteTransition
				pathname={this.props.location.pathname}
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
			>
				<Row className="show-grid">
					<Col xs={6} md={3} ><NoteListBox/></Col>
					<Col xs={12} md={9} id={styles.check_box}><NoteCreationBox/></Col>
				</Row>
			</RouteTransition>

		);
	}
}


export default NotePage;
