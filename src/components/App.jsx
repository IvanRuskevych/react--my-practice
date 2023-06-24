import { Route, Routes } from 'react-router';

import HomePage from 'pages/Home';
import RegisterPage from 'pages/Register';
import LoginPage from 'pages/Login';
import { TasksPage } from 'pages/Tasks';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivetRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/tasks" component={RegisterPage} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/tasks" component={LoginPage} />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/register" component={TasksPage} />
            }
          />
        </Route>
      </Routes>
    )
  );
};
