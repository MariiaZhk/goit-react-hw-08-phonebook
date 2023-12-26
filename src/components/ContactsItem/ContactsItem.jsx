import {
  ContactItem,
  ContactText,
  DeleteItemButton,
} from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/operations';

export const ContactsItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactText>
        <b>{name}</b> : {phone}
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
