import {FETCH_SERVICE} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_SERVICE:
        return action.payload;
         default:
        return state;

    }
}