/**
 * Created by Teerapat on 11/22/2016.
 */
import {NOTE_SELECTED,NOTE_EDITING,NOTE_SAVE,NOTE_DELETE,NOTE_ADD} from './types';

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

	return{
		type:NOTE_SAVE
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
