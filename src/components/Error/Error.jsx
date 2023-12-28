import { useSelector } from 'react-redux';
import { getError } from '../../redux/phonebook/selectors';
import { ErrorStyled } from '../App/App.styled';

export const Error = () => {
  const error = useSelector(getError);

  return (
    <ErrorStyled>
      <h2>Sorry... {error}</h2>
    </ErrorStyled>
  );
};
