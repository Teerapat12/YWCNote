/**
 * Created by Teerapat on 11/22/2016.
 */
import {NOTE_SELECTED,NOTE_EDITING,NOTE_SAVE,NOTE_DELETE,NOTE_ADD,NOTE_EDITTITLE,NOTE_STARTLOAD,NOTE_FINLOAD} from './types';

export function selectNote(id){

	//Save Note TO!
	return {
		type: NOTE_SELECTED,
		payload:id
	}

}

export function editNote(noteDetail){
	return {
		type: NOTE_EDITING,
		payload:noteDetail
	}
}

export function saveNote(){

	return function(dispatch){

		dispatch({type:NOTE_STARTLOAD});
		setTimeout(function(){
			dispatch({type:NOTE_FINLOAD});

			dispatch({
				type:NOTE_SAVE
			})
		},2000);

	}
}



export function deleteNote(index){
	return{
		type:NOTE_DELETE,
		payload:index
	}
}


export function addNote(noteTitle){
	return{
		type:NOTE_ADD,
		payload:noteTitle
	}
}

export function editTitle(noteTitle){
	return function(dispatch){
		dispatch({type:NOTE_STARTLOAD});
		setTimeout(function(){
			dispatch({type:NOTE_FINLOAD});
			dispatch({
				type:NOTE_EDITTITLE,
				payload:noteTitle
			})
		},800);

	}
}

export function startLoad(){
	return{
		type:NOTE_STARTLOAD
	}
}

export function finishLoad(){
	return{
		type:NOTE_FINLOAD
	}
}
