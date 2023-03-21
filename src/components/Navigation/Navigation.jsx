import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { LogOutBtn } from 'components/UserInfo/UserInfoStyled.styled';
import { selectIsLoggedIn, selectSubscription } from 'redux/auth/authSelectors';
import {
  NavigationListStyled,
  NavLinkStyled,
  UserManagerStyled,
  UserNavigationStyled,
} from './NavigationStyled.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const subscription = useSelector(selectSubscription);
  const dispatch = useDispatch();
  const onLogOutClick = () => dispatch(logOut());
  return (
    <>
      <NavigationListStyled>
        <UserNavigationStyled>
          <NavLinkStyled to="" end>
            Home
          </NavLinkStyled>
          {!isLoggedIn && (
            <>
              <NavLinkStyled to="register">Register</NavLinkStyled>
              <NavLinkStyled to="login">LogIn</NavLinkStyled>
            </>
          )}
          {isLoggedIn && (
            <>
              <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
              {subscription === 'pro' && (
                <NavLinkStyled to="favorite">Favorites</NavLinkStyled>
              )}
            </>
          )}
        </UserNavigationStyled>
        {isLoggedIn && (
          <UserManagerStyled>
            <UserInfo />
            <LogOutBtn onClick={onLogOutClick}>Log Out</LogOutBtn>
          </UserManagerStyled>
        )}
      </NavigationListStyled>
    </>
  );
};
