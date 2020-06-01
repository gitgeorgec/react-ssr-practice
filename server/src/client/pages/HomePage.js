import React from 'react';


const HomePage = props => {
	return (
		<div>
			<div>Hello There!!!</div>
			<button onClick={() => console.log('hello click')}>Click</button>
		</div>
	)
}

export default {
	component: HomePage,
};
