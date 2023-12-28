import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/authOperations';
import { selectUserName } from '../../redux/auth/authSelectors';
import { LogoutBtn, UserMenuWrap, UserText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  return (
    <UserMenuWrap>
      <img
        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg"
        alt={user}
        width={60}
        height={60}
      ></img>

      <UserText>Welcome, {user}</UserText>
      <LogoutBtn onClick={() => dispatch(logoutThunk())}>LOG OUT</LogoutBtn>
    </UserMenuWrap>
  );
};
