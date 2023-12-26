import { useState } from 'react';
import { Button, FormStyled, Input, Label } from 'components/Form/Form.styled';
import { getItems } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/operations';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(getItems);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, phone };
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
    setPhone('');
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
      <Label htmlFor="phone">
        Number
        <Input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};
