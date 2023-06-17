import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { getIsRefreshing } from 'redux/auth/selectors';
import Container from './Container/Container';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(getIsRefreshing);

  return isRefreshing ? (
    <Container>
      <h2>Refreshing user...</h2>
    </Container>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/register"
          element={
            <PublicRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute component={<Login />} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
}
