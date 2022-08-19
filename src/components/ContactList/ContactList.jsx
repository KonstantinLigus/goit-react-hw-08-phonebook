import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList({ contacts, deleteBtnHandler }) {
  return (
    <ul>
      <ContactItem contacts={contacts} deleteBtnHandler={deleteBtnHandler} />
    </ul>
  );
}
