/**
 * Created by Teerapat on 11/22/2016.
 */

import { combineReducers } from 'redux';
import note_reducer from './note_reducer';

const rootReducer = combineReducers({
	note: note_reducer
});

export default rootReducer;
