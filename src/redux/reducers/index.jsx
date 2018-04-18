import {combineReducers} from 'redux';
import authReducer from './authReducer';
import incReducer from './IncReducer';
import comReducer from './ComReducer';
import reqReducer from './reqReducer';
import serviceReducer from './serviceReducer';
import usersReducer from './usersReducer'

 export default combineReducers({
     auth: authReducer,
     incident:incReducer,
     complaint:comReducer,
     request:reqReducer,
     service: serviceReducer,
     users:usersReducer
});
