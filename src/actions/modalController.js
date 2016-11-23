import {OPEN_MODAL,CLOSE_MODAL} from './types';

export function openModal(modalName){

	return{
		type:OPEN_MODAL,
		payload:modalName
	}
}

export function closeModal(){
	{

		return{
			type: CLOSE_MODAL
		}
	}
}
