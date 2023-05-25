import { lazy } from 'react';

const HomePage = lazy(() => import('../page/Home/HomePage'));
const Login = lazy(() => import('../page/Authentication/Login/Login'));

export { HomePage, Login }