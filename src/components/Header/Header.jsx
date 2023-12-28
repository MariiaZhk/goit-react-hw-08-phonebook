import { NavBar } from 'components/NavBar/NavBar';
import { HeaderStyled, LogoWrap, NavWrap } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <NavWrap>
        <LogoWrap>
          <img
            src="https://wscandcompany.com/wp-content/uploads/2023/01/heritage-tree.png"
            alt="Phonebook"
            width={70}
            height={70}
          />{' '}
          <h2>Phonebook</h2>
        </LogoWrap>
        <NavBar />
      </NavWrap>
    </HeaderStyled>
  );
};
