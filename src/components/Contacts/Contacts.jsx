export function Contacts({ contacts }) {
  return contacts.map(contact => <li>{contact}</li>);
}
