import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../redux/auth/authSelectors';
import { HomeHello, HomeLink, HomeSlogan, HomeWrapper } from './Pages.styled';

export const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);

  return (
    <HomeWrapper>
      {isLoggedIn ? (
        <HomeHello>Hi, {user}! Welcome to your Phonebook.</HomeHello>
      ) : (
        <HomeHello>
          Hi! Please, <HomeLink to="/login">SIGN IN</HomeLink> to your account
          or register via <HomeLink to="/register">REGISTRATION</HomeLink> .
        </HomeHello>
      )}
      <HomeSlogan>
        The Phone Book: Stay Safe, Be Smart, and Make the World Better with this
        Powerful Device in Your Hand.
      </HomeSlogan>
    </HomeWrapper>
  );
};
