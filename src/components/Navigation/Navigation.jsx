import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';
import UserMenu from 'components/UserNenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #2b2730;
  font-size: 20px;

  &.active {
    color: #fb6090;
  }
`;

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav className={css.nav_bar}>
      <div className={css.nav_linkWrapper}>
        {isLoggedIn ? (
          <>
            <StyledLink to="/contacts">ContactBook</StyledLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
          </>
        )}
      </div>
    </nav>
  );
}
