import { useState } from 'react';
import { Button, FormStyled, Input, Label } from 'components/Form/Form.styled';
import { getItems } from '../../redux/phonebook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/phonebook/operations';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(getItems);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, number };
    if (items.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`Contact name ${name} already exists!`);
      resetForm();
      return;
    }
    dispatch(addContactThunk(newContact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="number"
          id="number"
          value={number}
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};
