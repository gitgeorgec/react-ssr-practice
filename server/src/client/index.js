import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import reducers from './reducers';

const store = createStore(
	reducers,
	window.INITIAL_STATE,
	applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>{renderRoutes(routes)}</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
