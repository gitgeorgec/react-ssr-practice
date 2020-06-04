import { combineReducers } from 'redux';
import users from './users';
import auth from './authReducer'

const reducers = combineReducers({
	users,
	auth
})


export default reducers;
