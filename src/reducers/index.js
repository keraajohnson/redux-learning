import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
	posts: postsReducer,
	users: usersReducer
});

// RULES OF REDUCERS
// RETURN VALUES
// Must return any value with the exception of 'undefined'
// If we return undefined, we'll get an error message that breaks the application
// When redux boots up, it will call reducers once
// ARGUMENT VALUES
//
