import {FETCH_REQUEST} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_REQUEST:
        return action.payload;
         default:
        return state;

    }
}