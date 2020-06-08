import App from './app';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import AdminsListPage from './pages/AdminsListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true,
			},
			{
				...UserListPage,
				path: '/users',
			},
			{
				...AdminsListPage,
				path: '/admins',
			},
			{
				...NotFoundPage
			}
		]
	}
]
