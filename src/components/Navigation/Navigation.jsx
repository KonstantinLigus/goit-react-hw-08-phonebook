import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { NavigationStyled } from './NavigationStyled.styled';
import { NavLinkStyled } from './NavLinkStyled.stled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav>
        <NavigationStyled>
          <li>
            <NavLinkStyled to="" end>
              Home
            </NavLinkStyled>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLinkStyled to="register">Register</NavLinkStyled>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLinkStyled to="login">LogIn</NavLinkStyled>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <UserMenu />
            </li>
          )}
        </NavigationStyled>
      </nav>
    </>
  );
};
