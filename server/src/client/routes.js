import App from './app';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage'

export default [
	{
		...App,
		routes: [
			{
				path: '/',
				exact: true,
				...HomePage,
			},
			{
				path: '/users',
				...UserListPage,
			}
		]
	}
]
