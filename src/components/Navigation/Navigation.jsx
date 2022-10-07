import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/register'}>Register</NavLink>
    <NavLink to={'/login'}>LogIn</NavLink>
    <NavLink to={'/contacts'}>Contacts</NavLink>
  </nav>
);
