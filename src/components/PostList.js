import React, { Component } from 'react';
// WHEN WE ADD CONNECT, WE KNOW THAT WE WILL REQUIRE A mapStateToProps FUNCTION LATER IN OUR COMPONENT
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import UserHeader from './UserHeader';

class PostList extends Component {
	componentDidMount() {
		// WHENEVER THIS COMPONENT IS RENDERED ON THE SCREEN WE WILL BE CALLING OUR ACTION CREATOR WHICH MAKES THE DATA CALL TO THE API
		this.props.fetchPosts();
	}

	renderList() {
		// render the list of posts
		return this.props.posts.map((post, index) => {
			return (
				<div className='item' key={post.id}>
					<i className='large middle aligned icon user' />
					<div className='content'>
						<div className='description'>
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
						<UserHeader userId={post.userId} />
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className='ui relaxed divided list'>{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	// WE DEFINED THIS KEY IN OUR COMBINE REDUCER FILE
	return {
		posts: state.posts
	};
};

// THE FIRST ARGUMENT IS OUR mapStateToProps FUNCTION, THE SECOND IS OUR ACTION CREATOR(S)
// THE FIRST CONNECT FUNCTION IS CALLING THE FUNCTION
// THE SECOND FUNCTION IS ENVOKING THE FUNCTION (WHICH IS POSTLIST)
// EVERY TIME OUR REDUCERS RUN, IT WILL CALL MAP STATE TO PROPS
export default connect(mapStateToProps, { fetchPosts })(PostList);
