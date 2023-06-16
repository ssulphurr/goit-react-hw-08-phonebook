import Section from 'components/Section/Section';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsAndFilter/operations';
import {
  getContacts,
  getError,
  getIsLoading,
} from 'redux/contactsAndFilter/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>Opps, something went wrong: {error}</h2>}
        {contacts.length > 0 && !error && <ContactList />}
        {!isLoading && contacts.length === 0 && (
          <h4>You have no contacts. Add some in the form above</h4>
        )}
      </Section>
    </>
  );
}
