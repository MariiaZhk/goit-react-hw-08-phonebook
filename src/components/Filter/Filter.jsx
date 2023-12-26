import { Input, Label } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { setFilterAction } from '../../redux/phonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label htmlFor="filter">
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        id="filter"
        onChange={event => dispatch(setFilterAction(event.target.value))}
        required
      />
    </Label>
  );
};
