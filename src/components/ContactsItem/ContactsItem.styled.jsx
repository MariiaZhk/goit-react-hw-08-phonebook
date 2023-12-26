import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.theme.spacing(8)};
  padding: 10px;
  border: 1px solid black;
`;

export const DeleteItemButton = styled.button`
  background-color: ${props => props.theme.colors.blue};
  border-radius: ${props => props.theme.borderRadius.buttonBorder};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.white};
  min-width: 150px;
  height: 40px;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.hovers};
    color: ${props => props.theme.colors.white};
  }
`;

export const ContactText = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
