// This reducer is supposed to keep track of all of our posts within our application
// will be dealing wuth an array
// default our state using an empty array
export default (state = [], action) => {
	// watching the action of fetch posts, if we see something happening with fetch posts we know that we've recieved some data from the api
	// if (action.type === 'FETCH_POSTS') {
	//     return action.payload;
	// }

	//SWITCH STATEMENTS
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}

	// If we ever see an action that isn't the type 'FETCH POSTS' then we should just return state
	// We can't return the undefinded from a reducer
};
