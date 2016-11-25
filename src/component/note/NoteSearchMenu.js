/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modalController';
import {search_change ,change_sortMode} from '../../actions/noteController';
import {FormControl,FormGroup,DropdownButton,MenuItem ,Button} from 'react-bootstrap';
import styles from './note.css';

class NoteSearchMenu extends Component {

	constructor(props){
		super(props);
		this.state = {
			query:''
		}
	}

	handleChange(e){
		this.props.search_change(e.target.value);
	}

	isSortMode(mode){
		if(mode!=this.props.sort_mode){
			return false
		}
		return true
	}


	render() {
		return (
			<div>
				<FormGroup>
					<FormControl type="search" value={this.props.note_query} onChange={this.handleChange.bind(this)} className={styles.searchbox} placeholder="Search" />
					<DropdownButton bsSize="small" title="Options   " id={styles.menuoption+" bg-vertical-dropdown-2"} noCaret className={styles.right+" "+styles.menuoption} onSelect={(evt)=>{this.props.change_sortMode(evt)}}>
						<h5 className={styles.sortbytext}>Sort By</h5>
						<MenuItem eventKey="da" active={this.isSortMode('da')} >Created Date (Ascending)</MenuItem>
						<MenuItem eventKey="dd" active={this.isSortMode('dd')} >Created Date (Descending)</MenuItem>
						<MenuItem eventKey="ua" active={this.isSortMode('ua')} >Update Date (Ascending)</MenuItem>
						<MenuItem eventKey="ud" active={this.isSortMode('ud')} >Update Date (Descending)</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey="5">Show Text <i className={styles.right+" fa fa-check "} aria-hidden="true" ></i></MenuItem>
					</DropdownButton>

					<Button className={styles.right+" "+styles.addbutton} bsStyle={'primary'} onClick={()=>this.props.openModal('addNote')}><i className="fa fa-plus" aria-hidden="true"></i></Button>
				</FormGroup>
				<hr/>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		note_query:state.note.note_query,
		sort_mode:state.note.sort_mode
	};
}

export default connect(mapStateToProps,{openModal,search_change,change_sortMode})(NoteSearchMenu);

