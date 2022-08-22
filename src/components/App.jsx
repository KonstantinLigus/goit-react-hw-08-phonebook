import { nanoid } from 'nanoid';
import { Component } from 'react';
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

  changeFilterHandler = e => {
    const {
      target: { value, name },
    } = e;
    this.setState({ [name]: value });
  };

  // submitHandler = e => {
  // const {
  //   target: {
  //     elements: {
  //       name: { value: nameValue },
  //       number: { value: numberValue },
  //     },
  //   },
  // } = e;
  // e.preventDefault();
  // if (this.state.contacts.some(contact => contact.name.includes(nameValue))) {
  //   alert(`${nameValue} is already in contacts`);
  //   return;
  // }
  // this.setState(prevState => ({
  //   contacts: [
  //     { name: nameValue, number: numberValue, id: nanoid() },
  //     ...prevState.contacts,
  //   ],
  // }));
  // e.target.reset();
  // };
  submitHandler = (values, { resetForm }) => {
    const { name, number } = values;
    console.log(values);
    resetForm({
      values: {
        name: '',
        number: '',
      },
    });
    if (this.state.contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        { name: name, number: number, id: nanoid() },
        ...prevState.contacts,
      ],
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
        <h1>Phonebook</h1>
        <ContactForm submitHandler={this.submitHandler} />
        <>
          <h2>Contacts</h2>
          <Filter
            filter={filter}
            changeFilterHandler={this.changeFilterHandler}
          />
          <ContactList
            contacts={filteredContacts}
            deleteBtnHandler={this.deleteBtnHandler}
          />
        </>
      </>
    );
  }
}
