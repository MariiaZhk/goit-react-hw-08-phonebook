import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
`;
export const LeftSideWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RightSideWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkBlue};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.extraBold};

  &.active,
  &:hover {
    color: #ffffff !important;
  }
`;
