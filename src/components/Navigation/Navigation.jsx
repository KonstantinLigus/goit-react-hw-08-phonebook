import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { UserInfo } from 'components/UserMenu/UserMenu';
import { LogOutBtn } from 'components/UserMenu/UserMenuStyled.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { MenuItem, NavigationStyled } from './NavigationStyled.styled';
import { NavLinkStyled } from './NavLinkStyled.stled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const onLogOutClick = () => dispatch(logOut());
  return (
    <>
      <nav>
        <NavigationStyled>
          <MenuItem>
            <NavLinkStyled to="" end>
              Home
            </NavLinkStyled>
          </MenuItem>
          {!isLoggedIn && (
            <>
              <MenuItem>
                <NavLinkStyled to="register">Register</NavLinkStyled>
              </MenuItem>
              <MenuItem>
                <NavLinkStyled to="login">LogIn</NavLinkStyled>
              </MenuItem>
            </>
          )}
          {isLoggedIn && (
            <>
              <MenuItem>
                <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
              </MenuItem>
              <MenuItem>
                <UserInfo />
              </MenuItem>
              <MenuItem>
                <LogOutBtn onClick={onLogOutClick}>Log Out</LogOutBtn>
              </MenuItem>
            </>
          )}
        </NavigationStyled>
      </nav>
    </>
  );
};
