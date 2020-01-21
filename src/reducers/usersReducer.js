export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_USER':
			// adding a new record
			// adding to the array every single time fetch user is called
			return [...state, action.playload];
		default:
			return state;
	}
};
