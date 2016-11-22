/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import styles from './note.css';
import {Panel} from 'react-bootstrap';
var Confirm = require('react-confirm-bootstrap');
import {connect} from 'react-redux';
import {selectNote,deleteNote} from '../../actions/noteController';


class NoteItem extends Component {

	handleClick(e){
		this.props.selectNote(this.props.noteIndex);
	}

	onConfirm(e){
		//Delete Note
		this.props.deleteNote(this.props.noteIndex);
	}




	render() {
		var panelClassName = styles.note;
		if(this.props.selected){
			panelClassName+=" "+styles.selectednote;
		}
		var {noteTitle,noteDetail} = this.props.note;

		return (
			<Panel  className={panelClassName} id="noteItemPanel">
				<Confirm
					onConfirm={this.onConfirm.bind(this)}
					body="Are you sure you want to delete this?"
					confirmText="Confirm Delete"
					title="Deleting Stuff">
					<a className={"pull-right text-success "+styles.deletebutton} ><span id="deletebutton" className="glyphicon glyphicon-trash" ></span></a>
				</Confirm>

				<div className={styles.noteHeader} onClick={ this.handleClick.bind(this) }>

					<h5>{noteTitle}</h5>
					<p>recently!</p>
					<p>{this.props.note.selectedNoteId}</p>

				</div>
				<div className="noteBody" onClick={ this.handleClick.bind(this) } >
					{ this.props.note.noteDetail.replace(/<\/?[^>]+(>|$)/g, "")}
				</div>
			</Panel>
		);
	}
}

function mapStateToProps(state) {
	return {
		noteList: state.note
	};
}

export default connect(mapStateToProps,{selectNote,deleteNote})(NoteItem);
