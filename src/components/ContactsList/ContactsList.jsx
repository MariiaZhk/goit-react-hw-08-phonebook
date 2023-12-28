import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsListStyled, Warning } from './ContactsList.styled';
import { getFilter, getItems } from '../../redux/phonebook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../../redux/phonebook/operations';

export const ContactsList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const getFilteredData = () => {
    return items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {getFilteredData().length === 0 ? (
        <Warning>There aren't contacts that match your search query...</Warning>
      ) : (
        <ContactsListStyled>
          {getFilteredData().map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
        </ContactsListStyled>
      )}
    </>
  );
};
