import React from 'react';
import { connect } from 'react-redux';


const Home = props => {
	return (
		<div>
			<div>Hello There!!!</div>
			<button onClick={() => console.log('hello click')}>Click</button>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		state
	}
}
function mapDispatchToProps() {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
