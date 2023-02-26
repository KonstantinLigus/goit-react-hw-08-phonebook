import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserSubscription } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

import {
  Subscription,
  SubscriptionChange,
  SubscriptionChoice,
  SubscriptionEnumWrap,
  UserInfoWrap,
  UserSubscriptionWrap,
} from './UserMenuStyled.styled';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isSubscriptionEnumShow, setIsSubscriptionEnumShow] = useState(false);

  const onSubscriptionChangeClick = () => {
    setIsSubscriptionEnumShow(!isSubscriptionEnumShow);
  };

  const onSubscriptionChoiceClick = e => {
    dispatch(changeUserSubscription({ subscription: e.target.innerText }));
  };

  return (
    <UserInfoWrap>
      <p>Welcome, {user.name}</p>
      <UserSubscriptionWrap>
        <Subscription>{user.subscription}</Subscription>
        <SubscriptionChange onClick={onSubscriptionChangeClick}>
          Change
        </SubscriptionChange>
        {isSubscriptionEnumShow && (
          <SubscriptionEnumWrap>
            {user.subscription !== 'starter' && (
              <SubscriptionChoice onClick={onSubscriptionChoiceClick}>
                starter
              </SubscriptionChoice>
            )}
            {user.subscription !== 'pro' && (
              <SubscriptionChoice onClick={onSubscriptionChoiceClick}>
                pro
              </SubscriptionChoice>
            )}
            {user.subscription !== 'business' && (
              <SubscriptionChoice onClick={onSubscriptionChoiceClick}>
                business
              </SubscriptionChoice>
            )}
          </SubscriptionEnumWrap>
        )}
      </UserSubscriptionWrap>
    </UserInfoWrap>
  );
};
