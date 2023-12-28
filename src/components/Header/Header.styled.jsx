import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  top: 0px;
  left: 0;
  background-color: ${props => props.theme.colors.lightBlue};
  z-index: 999;
  box-shadow: 0 0 15px 0 rgba(142, 222, 251, 0.5);
`;

export const NavWrap = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

export const LogoWrap = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkBlue};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;
