import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 70px;
  max-width: 700px;
`;
export const HomeHello = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const HomeSlogan = styled.h3`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-style: italic;
`;

export const HomeLink = styled(NavLink)`
  color: ${props => props.theme.colors.lightBlue};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.extraBold};

  &.active,
  &:hover {
    background-color: ${props => props.theme.colors.white}!important;
  }
`;

export const FormWrap = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const FormTitle = styled.h1`
  margin-bottom: 30px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.extraLarge};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  min-width: 350px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  padding: 10px;
  outline: none;
  min-height: 50px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.darkBlue};
  box-shadow: 0 0 5px 0 rgba(142, 222, 251, 0.5);
  border-color: transparent;
  transition: border-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:focus {
    border-color: ${props => props.theme.colors.lightBlue};
  }
`;

export const ButtonSign = styled.button`
  padding: 10px;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.colors.lightBlue};
  border-radius: ${props => props.theme.borderRadius.buttonBorder};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.darkBlue};
  box-shadow: 0 0 10px 0 rgba(93, 154, 176, 0.5);
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkBlue};
  }
`;

export const LinkText = styled(Link)`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.gray};
`;

export const NotFoundWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NotFoundText = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: #f35434;
`;
