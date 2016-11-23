/**
 * Created by Teerapat on 11/22/2016.
 */

import { combineReducers } from 'redux';
import note_reducer from './note_reducer';
import modalReducer from './modal_reducer';
const rootReducer = combineReducers({
	note: note_reducer,
	modalName: modalReducer
});

export default rootReducer;
