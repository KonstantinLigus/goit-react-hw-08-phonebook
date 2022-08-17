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
    this.setState({ [name]: value });
  };

  SubmitHandler = e => {
    const {
      target: {
        elements: {
          name: { value: NameValue },
          number: { value: NumberValue },
        },
      },
    } = e;
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [
        { name: NameValue, number: NumberValue },
        ...prevState.contacts,
      ],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number } = this.state;
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
            <input type="text" name="filter" />
            <Contacts contacts={contacts} />
          </>
        )}
      </>
    );
  }
}
