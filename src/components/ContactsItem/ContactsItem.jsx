import {
  ContactItem,
  ContactText,
  DeleteItemButton,
} from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/phonebook/operations';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactText>
        <b>{name}</b> : {number}
      </ContactText>
      <DeleteItemButton
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </DeleteItemButton>
    </ContactItem>
  );
};
