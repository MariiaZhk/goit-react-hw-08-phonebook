import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import {
  LeftSideWrap,
  NavBarWrapper,
  NavLinkStyled,
  RightSideWrap,
} from './NavBar.styled';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavBarWrapper>
      <LeftSideWrap>
        <NavLinkStyled to="/">Home</NavLinkStyled>
      </LeftSideWrap>
      <RightSideWrap>
        {!isLoggedIn && (
          <>
            <NavLinkStyled to="/register">Registration</NavLinkStyled>
            <NavLinkStyled to="/login">Sign In</NavLinkStyled>
          </>
        )}
        {isLoggedIn && (
          <>
            <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            <UserMenu />
          </>
        )}
      </RightSideWrap>
    </NavBarWrapper>
  );
};
