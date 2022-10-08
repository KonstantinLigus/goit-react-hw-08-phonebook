import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'register'}>Register</NavLink>
          </li>
          <li>
            <NavLink to={'login'}>LogIn</NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to={'contacts'}>Contacts</NavLink>
            </li>
          )}
        </ul>
      </nav>
      {isLoggedIn && <UserMenu />}
    </>
  );
};
