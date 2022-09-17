import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initValue = () => {
  const contactsLocalStorage = localStorage.getItem('contacts');
  if (
    contactsLocalStorage === '' ||
    JSON.parse(contactsLocalStorage)===null
  ) {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  }
  return JSON.parse(contactsLocalStorage);
};

export function App() {
  const [contacts, setContacts] = useState(initValue);
  const [filter, setFilter] = useState('');
  const filteredContacts = filterContacts();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function changeFilterHandler(e) {
    const {
      target: { value },
    } = e;
    setFilter(value);
  }

  function submitHandler(name, number) {
    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      { id: nanoid(), name, number },
      ...prevContacts,
    ]);
  }

  function filterContacts() {
    const filterValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterValue)
    );
  }

  function deleteBtnHandler(e) {
    setContacts(contacts.filter(contact => contact.id !== e.target.id));
  }

  return (
    <>
      <Box p="20px">
        <Box mb="20px" as="h1">
          Phonebook
        </Box>
        <ContactForm submitHandler={submitHandler} />
      </Box>
      <Box p="20px">
        <Box mb="20px" as="h2">
          Contacts
        </Box>
        <Filter filter={filter} changeFilterHandler={changeFilterHandler} />
        <ContactList
          contacts={filteredContacts}
          deleteBtnHandler={deleteBtnHandler}
        />
      </Box>
    </>
  );
}
