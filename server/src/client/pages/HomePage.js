import React from 'react';


const HomePage = props => {
	return (
		<div className="center-align">
			<h3>Hello There!!!</h3>
			<p>check out </p>
			<button onClick={() => console.log('hello click')}>Click</button>
		</div>
	)
}

export default {
	component: HomePage,
};
