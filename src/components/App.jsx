import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <>
      <Box p="20px">
        <Box mb="20px" as="h1">
          Phonebook
        </Box>
        <ContactForm />
      </Box>
      <Box p="20px">
        <Box mb="20px" as="h2">
          Contacts
        </Box>
        <Filter />
        <ContactList />
      </Box>
    </>
  );
}
