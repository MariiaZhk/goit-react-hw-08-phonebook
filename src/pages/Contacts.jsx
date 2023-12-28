import { Loader, Subtitle, Title } from 'components/App/App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsListWrap } from 'components/ContactsList/ContactsList.styled';
import { Error } from 'components/Error/Error';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/SectionStyled/Section.styled';
import { useSelector } from 'react-redux';
import { Form } from '../components/Form/Form';
import { getError, getIsLoading } from '../redux/phonebook/selectors';
import * as React from 'react';

export const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <Section>
      <Title>Phonebook</Title>
      <Form />
      <ContactsListWrap>
        <Subtitle>Contacts</Subtitle>
        <Filter />
        {isLoading && <Loader>L o a d i n g ...</Loader>}
        {error ? <Error /> : <ContactsList />}
      </ContactsListWrap>
    </Section>
  );
};
