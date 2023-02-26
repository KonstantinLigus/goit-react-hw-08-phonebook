import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

const ContactsPage = () => (
  <>
    <ContactForm />
    <Box p="20px">
      <Box mb="20px" as="h2">
        Contacts
      </Box>
      <Filter />
      <ContactsList />
    </Box>
  </>
);

export default ContactsPage;
