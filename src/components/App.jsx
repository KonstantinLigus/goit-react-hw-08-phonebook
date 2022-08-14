import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
// import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  SubmitHandler = e => {
    const {
      target: {
        elements: {
          name: { value },
        },
      },
    } = e;
    e.preventDefault();
    this.setState(prevState => ({ contacts: [value, ...prevState.contacts] }));
    this.reset();
  };
  ChangeHandler = ({ target: { value } }) => {
    this.setState({ name: value });
  };
  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <Phonebook
          onSubmitClick={this.SubmitHandler}
          value={name}
          ChangeHandler={this.ChangeHandler}
        />
        {/* <Contacts /> */}
      </>
    );
  }
}
