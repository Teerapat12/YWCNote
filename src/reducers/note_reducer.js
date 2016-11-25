/**
 * Created by Teerapat on 11/22/2016.
 */
import {NOTE_SELECTED,NOTE_ADD,NOTE_EDITING,NOTE_SAVE,NOTE_DELETE,NOTE_LOAD,NOTE_EDITTITLE,NOTE_STARTLOAD,NOTE_FINLOAD,NOTE_SEARCH,NOTE_CHANGESORT} from '../actions/types'

const initialState ={
	selectedNoteId:-1,
	noteList:[{
		noteTitle: 'My First Note',
		noteDetail: 'This is my first note, bla bla blu bepi spdjafp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
		createdDate : new Date(),
		updatedDate : new Date()
	},
		{
			noteTitle: 'My Second Note',
			noteDetail: 'This is my first note, bla bla blu bepi spdjafp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
			createdDate : new Date(),
			updatedDate : new Date()
		},
		{
			noteTitle: 'My Third Note',
			noteDetail: 'This is my second, bla bla blu bepi spdjafp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
			createdDate : new Date(),
			updatedDate : new Date()
		},
		{
			noteTitle: 'My Fourth Note',
			noteDetail: 'oug uiguigi iugifirst note, bla bla blu bepi spdjafp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
			createdDate : new Date(),
			updatedDate : new Date()
		},
		{
			noteTitle: 'My Fifth Note',
			noteDetail: 'Thi fifth afp ajsdfpoajs dpfja sdopfjasdpof jaspodfasfasdfasdfas',
			createdDate : new Date(),
			updatedDate : new Date()
		}],
	editingNote:{
		noteTitle:'',
		noteDetail:''
	},
	loading_note:false,
	note_query:'',
	sort_mode:'da'
};






export default function(state=initialState,action){


	function compare(noteA,noteB,mode=state.sort_mode) {
		var a,b;
		if(mode=='da') {
			a = new Date(noteA.createdDate);
			b = new Date(noteB.createdDate);
		}
		else if(mode=='dd'){	  //dd
				a=new Date(noteB.createdDate);
				b=new Date(noteA.createdDate);

		}
		else if(mode=='ua'){ //ua
				a=new Date(noteB.updatedDate);
				b=new Date(noteA.updatedDate);
		}
		else if(mode=='ud'){ //ud
				a=new Date(noteA.updatedDate);
				b=new Date(noteB.updatedDate);
		}
		else{
			return 0;
		}

		if (a< b)
			return -1;
		if (a> b)
			return 1;
		return 0;
	}

	switch(action.type){
		case NOTE_LOAD:
			var notes = action.payload;
			if(notes==null)
				return state;
			else{
				var newObj = JSON.parse(JSON.stringify(initialState));
				newObj.noteList = JSON.parse(action.payload);
				return newObj;
			}
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
			var editingNote = newObj.noteList[editingId];

			editingNote.noteDetail = editingDetail;
			editingNote.updatedDate = new Date();
			newObj.noteList.sort(compare);
			localStorage.setItem('notes',JSON.stringify(newObj.noteList));   //SAVE NOTES HERE
			return newObj;

		case NOTE_DELETE:
			var newObj = JSON.parse(JSON.stringify(state));
			newObj.noteList.splice(action.payload,1);
			localStorage.setItem('notes',JSON.stringify(newObj.noteList));   //SAVE NOTES HERE
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
				createdDate:new Date(),
				updatedDate: new Date()
			}
			newObj.noteList.push(newNote);
			newObj.selectedNoteId = newObj.noteList.length-1;
			newObj.editingNote = newNote;
			newObj.noteList.sort(compare);
			localStorage.setItem('notes',JSON.stringify(newObj.noteList));   //SAVE NOTES HERE
			return newObj;

		case NOTE_EDITTITLE:
			var newObj = JSON.parse(JSON.stringify(state));
			var editingId = newObj.selectedNoteId;
			newObj.noteList[editingId].noteTitle = action.payload;
			localStorage.setItem('notes',JSON.stringify(newObj.noteList));   //SAVE NOTES HERE
			return newObj;

		case NOTE_STARTLOAD:
			var newObj = JSON.parse(JSON.stringify(state));
			newObj.loading_note = true;
			return newObj;
		case NOTE_FINLOAD:
			var newObj = JSON.parse(JSON.stringify(state));
			newObj.loading_note = false;
			return newObj;

		case NOTE_SEARCH:
			var newObj = JSON.parse(JSON.stringify(state));
			newObj.note_query = action.payload;
			return newObj;
		case NOTE_CHANGESORT:
			var newObj = JSON.parse(JSON.stringify(state));
			newObj.sort_mode = action.payload;
			newObj.noteList.sort((a,b)=>compare(a,b,action.payload));
			return newObj;
		//Set to 'none' instead of '' so that we can avoid loading modal at the start. Reducing loading time
	}

	return state;
}
