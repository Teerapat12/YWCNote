/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import styles from './note.css';
import {Panel} from 'react-bootstrap';
var Confirm = require('react-confirm-bootstrap');

class NoteItem extends Component {
	handleClick(){
		alert("I have been clicked XD ");
	}

	onConfirm(){
		console.log("CONFIRM!");
	}

	render() {
		console.log(this.props.selected);
		var panelClassName = styles.note;
		if(this.props.selected){
			panelClassName+=" "+styles.selectednote;
		}
		return (
			<Panel onClick={ this.handleClick } className={panelClassName} >
				<div className={styles.noteHeader}>
					<Confirm
						onConfirm={this.onConfirm}
						body="Are you sure you want to delete this?"
						confirmText="Confirm Delete"
						title="Deleting Stuff">
						<a className={"pull-right text-success "+styles.deletebutton} ><span className="glyphicon glyphicon-trash" ></span></a>
					</Confirm>
					<h5>Note Title!</h5>
					<p>recently</p>

				</div>
				<div className="noteBody">
					Basic panel examf ad sfa dsfas dfap leasd fgadfa fasd fasdfasdf asdf f asdf asdfds afads fasd fasd fasd fasd fdas fsdafa sdf asd fasdfas dfasdfasd
					fads fadsf asdfasdfasdf sdafasd fasdfasdfa sdfasdasdfads fads fas afd fdsa fasd fasd fadsfadsfasdfad sfads fads asdf
				</div>
			</Panel>
		);
	}
}


export default NoteItem;
