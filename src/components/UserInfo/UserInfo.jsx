import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserSubscription } from 'redux/auth/authOperations';
import { selectUser, selectUserAvatar } from 'redux/auth/authSelectors';

import {
  Subscription,
  SubscriptionChange,
  SubscriptionChoice,
  SubscriptionEnumWrap,
  UserAvatar,
  UserInfoWrap,
  UserName,
  UserSubscriptionWrap,
} from './UserInfoStyled.styled';

export const UserInfo = () => {
  const avatar = useSelector(selectUserAvatar);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isSubscriptionEnumShow, setIsSubscriptionEnumShow] = useState(false);
  useEffect(() => {
    const onDocumentClick = e => {
      setIsSubscriptionEnumShow(false);
    };
    document.addEventListener('click', onDocumentClick);
    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, []);

  const onSubscriptionChangeClick = e => {
    e.stopPropagation();
    setIsSubscriptionEnumShow(!isSubscriptionEnumShow);
  };

  const onSubscriptionChoiceClick = e => {
    dispatch(changeUserSubscription({ subscription: e.target.innerText }));
  };

  return (
    <UserInfoWrap>
      <UserName>{user.name}</UserName>
      {avatar && <UserAvatar src={avatar} alt="avatar" />}
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
