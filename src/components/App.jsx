import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export function App() {
  return (
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
