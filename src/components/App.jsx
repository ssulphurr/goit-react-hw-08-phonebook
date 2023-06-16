import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
