import { 
  FETCH_USER,
  FETCH_COMPLAINT,
  FETCH_INCIDENT, 
  FETCH_REQUEST,
  FETCH_SERVICE,
  FETCH_USERS} from './types';

const base = 'http://school.itthynkonline.com:5000'

export const fetchUser = () => async dispatch => {
    let res = await fetch('/api/user/current-user', {credentials: "include"});

    let data = await res.json();
    dispatch({type: FETCH_USER, payload: data.user});
  }

  export const fetchIncident =() => async dispatch => {
    try{
    let res = await fetch('/api/request/query/q/?type=Incident');
    let data = await res.json();
   
     dispatch({type:FETCH_INCIDENT , payload: data});
    }catch(err){console.log(err.message)}
  }

  export const fetchComplaint = () => async dispatch =>{
    try{
    let res = await fetch('/api/request/query/q/?type=Complaint');
    let data = await res.json();
    dispatch({type:FETCH_COMPLAINT, payload: data});
    }catch(err){console.log(err.message)}
  }

export const fetchRequest = () => async dispatch =>{
  try{
  let res = await fetch('/api/request/query/q/?type=Request');
  let data = await res.json();
  dispatch({type:FETCH_REQUEST,payload: data});
  }catch(err){console.log(err.message)}
}

export const fetchService = () => async dispatch =>{
  try{
  let res = await fetch('/api/group');
  let data = await res.json();
  dispatch({type:FETCH_SERVICE,payload: data});
  }catch(err){console.log(err.message)}
}

export const fetchUsers = () => async dispatch =>{
  try{
    let res = await fetch('/api/user');
    let data = await res.json();
    dispatch({type:FETCH_USERS,payload: data});
    }catch(err){console.log(err.message)}


}