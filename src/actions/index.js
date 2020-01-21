// IMPORTING API
import jsonPlaceholder from '../apis/jsonPlaceholder';

// WE CAN USE ASYNC AWAIT NO PROBLEM
// ONLY HAVE ONE EXPRESSION THAT WE'RE RETURNING
// DEFINING A FUNCTION THAT WILL RETURN A FUNCTION
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// FETCH USER ACTION CREATOR
// Passing in the id of the user that we would like to fetch as an argument
export const fetchUser = id => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', payload: response.data });
};

// NORMAL ACTION CREATOR
// NAMED EXPORT
// export const fetchPosts = () => {
// 	const promise = jsonPlaceholder.get('/posts');

// 	// RETURNING AN ACTION
// 	return {
// 		// MUST have a type, can optionally have a payload
// 		type: 'FETCH_POSTS',
// 		payload: promise
// 	};
// };
// WE WANT TO WIRE THIS UP TO OUR COMPONENT (POSTLIST) AND CALL IT EVERYTIME THE POSTLIST IS RENDERED ON THE SCREEN
