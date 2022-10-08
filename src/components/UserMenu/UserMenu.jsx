import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogOutClick = () => dispatch(logOut());
  return (
    <>
      <span>
        <b>Welcome, {user.name}</b>
      </span>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
