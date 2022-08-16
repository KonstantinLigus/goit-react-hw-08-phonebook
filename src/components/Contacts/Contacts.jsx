import { nanoid } from 'nanoid';

export function Contacts({ contacts }) {
  return contacts.map(contact => {
    const { name, number } = contact;
    return (
      <li key={nanoid()}>
        {name}
        {number}
      </li>
    );
  });
}
