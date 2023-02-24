import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

import {
  LogOutBtn,
  Subscription,
  SubscriptionChange,
  SubscriptionChoice,
  SubscriptionEnumWrap,
  UserSubscriptionAndLogoutWrap,
  UserSubscriptionWrap,
} from './UserMenuStyled.styled';

export const UserMenu = () => {
  const [isSubscriptionEnumShow, setIsSubscriptionEnumShow] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogOutClick = () => dispatch(logOut());
  return (
    <UserSubscriptionAndLogoutWrap>
      <p>Welcome, {user.name}</p>
      <UserSubscriptionWrap>
        <Subscription>{user.subscription}</Subscription>
        <SubscriptionChange>Change</SubscriptionChange>
        {isSubscriptionEnumShow && (
          <SubscriptionEnumWrap>
            {user.subscription !== 'starter' && (
              <SubscriptionChoice>starter</SubscriptionChoice>
            )}
            {user.subscription !== 'pro' && (
              <SubscriptionChoice>pro</SubscriptionChoice>
            )}
            {user.subscription !== 'business' && (
              <SubscriptionChoice>business</SubscriptionChoice>
            )}
          </SubscriptionEnumWrap>
        )}
      </UserSubscriptionWrap>
      <LogOutBtn onClick={onLogOutClick}>Log Out</LogOutBtn>
    </UserSubscriptionAndLogoutWrap>
  );
};
