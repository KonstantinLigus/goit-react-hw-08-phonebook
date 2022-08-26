import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilterHandler = e => {
    const {
      target: { value, name },
    } = e;
    this.setState({ [name]: value });
  };

  submitHandler = (name, number) => {
    if (this.state.contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
    }));
  };

  filterContacts = () => {
    const filterValue = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterValue)
    );
  };

  deleteBtnHandler = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== e.target.id
      ),
    });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <>
        <Box p="20px">
          <Box mb="20px" as="h1">
            Phonebook
          </Box>
          <ContactForm submitHandler={this.submitHandler} />
        </Box>
        <Box p="20px">
          <Box mb="20px" as="h2">
            Contacts
          </Box>
          <Filter
            filter={filter}
            changeFilterHandler={this.changeFilterHandler}
          />
          <ContactList
            contacts={filteredContacts}
            deleteBtnHandler={this.deleteBtnHandler}
          />
        </Box>
      </>
    );
  }
}
