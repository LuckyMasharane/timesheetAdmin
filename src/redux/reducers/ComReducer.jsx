import {FETCH_COMPLAINT} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_COMPLAINT:
        return action.payload;
         default:
        return state;

    }
}