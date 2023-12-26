import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { Section } from '../SectionStyled/Section.styled';
import { Loader, Subtitle, Title } from './App.styled';
import { ContactsListWrap } from 'components/ContactsList/ContactsList.styled';
import { useSelector } from 'react-redux';
import { getIsLoading, getError } from '../../redux/selectors';
import { Error } from 'components/Error/Error';

export const App = () => {
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
