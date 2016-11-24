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



	onConfirm(e){
		//Delete Note
		this.props.deleteNote(this.props.noteIndex);
	}

	handleAllClick(e){
		if(e.target.id=='deletebutton'){
			e.stopPropagation();
		}
		else{
			this.props.selectNote(this.props.noteIndex);
		}


	}




	render() {
		var panelClassName = styles.note;
		if(this.props.selected){
			panelClassName+=" "+styles.selectednote;
		}
		var {noteTitle,noteDetail,createdDate,selectedNoteId,updatedDate} = this.props.note;
		var createdDate = new Date(createdDate);
		var updatedDate = new Date(updatedDate);
		var updatedSince = ((new Date()).getTime() - updatedDate.getTime())/1000;
		var timeString = "";
		if(updatedSince > (3600)) { //More than Hour
			var hour = parseInt(updatedSince / 3600);
			if(hour>1)
				timeString = hour+ " hours ago";
			else
				timeString = hour+" hour ago";
		}
		else if(updatedSince >60){
			var minute = parseInt(updatedSince / 60);
			if(minute>1)
				timeString = minute + " minutes ago";
			else
				timeString = minute + " minute ago";
		}
		else{
			if(updatedSince>30){
				timeString = " recently";
			}
			else
				timeString = " moments ago";
		}
		return (
			<Panel  className={panelClassName} id="noteItemPanel" onClick={this.handleAllClick.bind(this)}>
				<Confirm
					onConfirm={this.onConfirm.bind(this)}
					body="Are you sure you want to delete this?"
					confirmText="Confirm Delete"
					title="Deleting Stuff">
					<a className={"pull-right  "+styles.deletebutton} ><span id="deletebutton" className="glyphicon glyphicon-trash" ></span></a>
				</Confirm>

				<div className={styles.noteHeader} >

					<h5>{noteTitle}</h5>
					<p>{timeString}</p>
					<p>{selectedNoteId}</p>

				</div>
				<div className="noteBody">

					{ noteDetail.length>0? noteDetail.replace(/<\/?[^>]+(>|$)/g, ""): <p className={styles.noteItemPlaceHolder}></p>}

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
