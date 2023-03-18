import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/conatactsOperations';
import { ContactsTitle } from './ContactsPageStyled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Box p="20px">
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactsList />
      </Box>
    </>
  );
};

export default ContactsPage;
