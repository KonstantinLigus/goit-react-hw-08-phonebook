import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { ContactsTitle } from './ContactsPageStyled';

const ContactsPage = () => (
  <>
    <ContactForm />
    <Box p="20px">
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactsList />
    </Box>
  </>
);

export default ContactsPage;
