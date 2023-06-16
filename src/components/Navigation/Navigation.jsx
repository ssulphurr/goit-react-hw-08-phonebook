import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #2b2730;
  font-size: 20px;

  &.active {
    color: #fb6090;
  }
`;

export default function Navigation() {
  return (
    <nav className={css.nav_bar}>
      <div className={css.nav_linkWrapper}>
        <StyledLink to="/contacts">ContactBook</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Log in</StyledLink>
      </div>
    </nav>
  );
}
