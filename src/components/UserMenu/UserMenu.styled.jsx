import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;

export const LogoutBtn = styled.button`
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkBlue};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.extraBold};

  &.active,
  &:hover {
    color: #ffffff !important;
  }
`;

export const UserText = styled.p`
  color: ${props => props.theme.colors.darkBlue};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;
