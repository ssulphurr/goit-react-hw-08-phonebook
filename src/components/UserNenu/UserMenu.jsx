import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogOut = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        Welcome,<span> {user.email}</span>
      </p>
      <button className={css.btn} onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}
