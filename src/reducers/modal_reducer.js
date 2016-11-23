/**
 * Created by Teerapat on 11/23/2016.
 */
/**
 * Created by Teerapat on 7/3/2016.
 */

import {OPEN_MODAL,CLOSE_MODAL} from '../actions/types'


export default function(state='nonee',action){
	switch(action.type){
		case OPEN_MODAL:
			return action.payload;

		case CLOSE_MODAL:
			return 'none';
		//Set to 'none' instead of '' so that we can avoid loading modal at the start. Reducing loading time
	}

	return state;
}
