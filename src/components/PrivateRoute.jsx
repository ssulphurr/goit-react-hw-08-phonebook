import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';

export default function PrivateRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
