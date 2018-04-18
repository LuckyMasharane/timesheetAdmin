import {FETCH_INCIDENT} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_INCIDENT:
        return action.payload;
         default:
        return state;

    }
}