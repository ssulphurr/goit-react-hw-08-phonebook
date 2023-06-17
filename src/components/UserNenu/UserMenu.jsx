import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';

export default function UserMenu() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogOut = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}
