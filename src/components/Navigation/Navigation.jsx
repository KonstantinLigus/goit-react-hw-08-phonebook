import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { LogOutBtn } from 'components/UserInfo/UserInfoStyled.styled';
import { selectIsLoggedIn, selectSubscription } from 'redux/auth/authSelectors';
import { MenuItemStyled, NavigationStyled } from './NavigationStyled.styled';
import { NavLinkStyled } from './NavLinkStyled.stled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const subscription = useSelector(selectSubscription);
  const dispatch = useDispatch();
  const onLogOutClick = () => dispatch(logOut());
  return (
    <>
      <nav>
        <NavigationStyled>
          <MenuItemStyled>
            <NavLinkStyled to="" end>
              Home
            </NavLinkStyled>
          </MenuItemStyled>
          {!isLoggedIn && (
            <>
              <MenuItemStyled>
                <NavLinkStyled to="register">Register</NavLinkStyled>
              </MenuItemStyled>
              <MenuItemStyled>
                <NavLinkStyled to="login">LogIn</NavLinkStyled>
              </MenuItemStyled>
            </>
          )}
          {isLoggedIn && (
            <>
              <MenuItemStyled>
                <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
              </MenuItemStyled>
              {subscription === 'pro' && (
                <MenuItemStyled>
                  <NavLinkStyled to="favorite">Favorites</NavLinkStyled>
                </MenuItemStyled>
              )}
              <MenuItemStyled>
                <UserInfo />
              </MenuItemStyled>
              <MenuItemStyled>
                <LogOutBtn onClick={onLogOutClick}>Log Out</LogOutBtn>
              </MenuItemStyled>
            </>
          )}
        </NavigationStyled>
      </nav>
    </>
  );
};
