import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  ChangeHandler = e => {
    const {
      target: { value, name },
    } = e;
    if (name === 'filter') {
      const filterValue = value.toLowerCase();
      this.setState({ [name]: filterValue });
    }
    this.setState({ [name]: value });
  };

  SubmitHandler = e => {
    const {
      target: {
        elements: {
          name: { value: nameValue },
          number: { value: numberValue },
        },
      },
    } = e;
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [
        { name: nameValue, number: numberValue },
        ...prevState.contacts,
      ],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <Phonebook
          onSubmitClick={this.SubmitHandler}
          nameValue={name}
          numberValue={number}
          ChangeHandler={this.ChangeHandler}
        />
        {contacts.length !== 0 && (
          <>
            <h2>Contacts</h2>
            <p>Find contacts by name</p>
            <input
              type="text"
              name="filter"
              value={filter}
              onChange={this.ChangeHandler}
            />
            <Contacts contacts={contacts} />
          </>
        )}
      </>
    );
  }
}
