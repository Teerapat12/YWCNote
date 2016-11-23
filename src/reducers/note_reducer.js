/**
 * Created by Teerapat on 11/22/2016.
 */
import {NOTE_SELECTED,NOTE_ADD,NOTE_EDITING,NOTE_SAVE,NOTE_DELETE} from '../actions/types'

const initialState ={
	selectedNoteId:-1,
	noteList:[{
		noteTitle: 'My First Note',
		noteDetail: 'This is my first note, bla bla blu bepi spdjafp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
		createdDate : Date.now(),
		updatedDate : Date.now()
	},
		{
			noteTitle: 'My Second Note',
			noteDetail: 'This is my first note, bla bla blu bepi spdjafp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
			createdDate : Date.now(),
			updatedDate : Date.now()
		},
		{
			noteTitle: 'My Third Note',
			noteDetail: 'This is my second, bla bla blu bepi spdjafp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
			createdDate : Date.now(),
			updatedDate : Date.now()
		},
		{
			noteTitle: 'My Fourth Note',
			noteDetail: 'oug uiguigi iugifirst note, bla bla blu bepi spdjafp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
			createdDate : Date.now(),
			updatedDate : Date.now()
		},
		{
			noteTitle: 'My Fifth Note',
			noteDetail: 'Thi fifth afp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
			createdDate : Date.now(),
			updatedDate : Date.now()
		}],
	editingNote:{
		noteTitle:'',
		noteDetail:''
	}
};

export default function(state=initialState,action){
	switch(action.type){
		case NOTE_SELECTED:
			var newObj = JSON.parse(JSON.stringify(state));
			newObj.selectedNoteId = action.payload;
			newObj.editingNote = newObj.noteList[action.payload];

			return newObj;

		case NOTE_EDITING:
			var newObj = JSON.parse(JSON.stringify(state));
			newObj.editingNote.noteDetail = action.payload;
			return newObj;

		case NOTE_SAVE:
			var newObj = JSON.parse(JSON.stringify(state));
			var editingDetail = newObj.editingNote.noteDetail;
			var editingId = newObj.selectedNoteId;
			newObj.noteList[editingId].noteDetail = editingDetail;

			return newObj;

		case NOTE_DELETE:
			var newObj = JSON.parse(JSON.stringify(state));
			newObj.noteList.splice(action.payload,1);
			console.log(action.payload,state.selectedNoteId)
			if(action.payload==state.selectedNoteId){
				newObj.edittingNote = {
					noteTitle:'',
					noteDetail:''
				}

				newObj.selectedNoteId = -1;
			}
			return newObj;

		case NOTE_ADD:
			var newObj = JSON.parse(JSON.stringify(state));
			//Add New Note
			var newNote = {
				noteTitle:action.payload,
				noteDetail:'',
				createdDate:Date.now(),
				updatedDate: Date.now()
			}
			newObj.noteList.push(newNote);
			newObj.selectedNoteId = newObj.noteList.length-1;
			newObj.editingNote = newNote;
			console.log(newObj);
			return newObj;

		//Set to 'none' instead of '' so that we can avoid loading modal at the start. Reducing loading time
	}

	return state;
}
