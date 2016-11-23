/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddNoteModal from './AddNoteModal';
import {closeModal} from '../../actions/modalController';

class ModalMenu extends Component {

	isSelectedModal(modalName){
		return (modalName==this.props.selectedModal);
	}

	close(){
		this.props.closeModal();
	}

	render() {
		if(!this.props.selectedModal){
			return (<div></div>);
		}
		return (
			<div>
				<AddNoteModal showModal={this.isSelectedModal('addNote')} close={this.close.bind(this)} />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		selectedModal: state.modalName
	};
}


export default connect(mapStateToProps,{closeModal})(ModalMenu);
