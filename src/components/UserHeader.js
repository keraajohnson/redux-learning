import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
	componentDidMount() {
		// Passing in the id, that's inside of the userHeader component
		this.props.fetchUser(this.props.userId);
	}

	render() {
		// We want to call an action creator inside of this component
		// "find" is a bulit in method on js arrays, we can call it with a function
		// This function will be invoked every time element inside of that array

		const user = this.props.users.find(user => user.id === this.props.userId);

		// if there is NO user found
		if (!user) {
			return null;
		}

		return <div className='header'>{user.name}</div>;
	}
}

const mapStateToProps = state => {
	return {
		users: state.users
	};
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
