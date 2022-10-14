import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { LogOutBtn } from './UserMenuStyled.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogOutClick = () => dispatch(logOut());
  return (
    <>
      <span>Welcome, {user.name}</span>
      <LogOutBtn onClick={onLogOutClick}>Log Out</LogOutBtn>
    </>
  );
};
