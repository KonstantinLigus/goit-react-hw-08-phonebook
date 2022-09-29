import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filter } from './actions';

const initialContactsState = () => {
  const contactsLocalStorage = localStorage.getItem('contacts');
  if (
    contactsLocalStorage === '' ||
    JSON.parse(contactsLocalStorage) === null
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

const contactsReducer = createReducer(initialContactsState, {
  [addContact](state, action) {
    const { name } = action.payload;
    if (state.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }
    state.push(action.payload);
    setLocalStorage(state);
  },
  [deleteContact](state, action) {
    setLocalStorage(state.filter(contact => contact.id !== action.payload));
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterReducer = createReducer('', {
  [filter](state, action) {
    return (state = action.payload);
  },
});

export const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

const setLocalStorage = contacts =>
  localStorage.setItem('contacts', JSON.stringify(contacts));
