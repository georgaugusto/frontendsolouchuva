import { Routes, Route } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import GlobalContextProvider from '../contexts';

import SingIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Layout from '../components/Layout';

import Dashboard from '../pages/Dashboard';
import History from '../pages/History';
import Cult from '../pages/Cult';
import Config from '../pages/Config';

import UserList from '../pages/User/List';
import Profile from '../pages/Profile';

import NotFound from '../pages/NotFound';

function Router() {
  return (
    <GlobalContextProvider>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route
          element={
            <Layout>
              <AuthRoute />
            </Layout>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/cult" element={<Cult />} />
          <Route path="/config" element={<Config />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />

          <Route element={<AuthRoute roles={['gamemaster']} />}>
            <Route path="/users/list" element={<UserList />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobalContextProvider>
  );
}

export default Router;
