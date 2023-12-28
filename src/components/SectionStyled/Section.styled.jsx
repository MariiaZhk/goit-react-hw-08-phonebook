import styled from 'styled-components';

export const Section = styled.section`
  width: 40%;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 20px auto;
  padding: ${props => props.theme.spacing(10)};
  border-radius: ${props => props.theme.borderRadius.wrapperBorder};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.regular};
`;
