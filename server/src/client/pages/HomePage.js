import React from 'react';


const HomePage = props => {
	return (
		<div>
			<h3>Hello There!!!</h3>
			<button onClick={() => console.log('hello click')}>Click</button>
		</div>
	)
}

export default {
	component: HomePage,
};
