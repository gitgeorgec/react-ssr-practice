import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage'

export default [
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
