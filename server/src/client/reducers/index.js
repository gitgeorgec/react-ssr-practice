import { combineReducers } from 'redux';
import users from './users';
import auth from './authReducer';
import admins from './adminsReduser';

const reducers = combineReducers({
	users,
	auth,
	admins
})


export default reducers;
