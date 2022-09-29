import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'reducer/actions';
import { getContacts, getFilter } from 'reducer/selectors';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterToLowerCase = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );
  const dispatch = useDispatch();
  function deleteBtnHandler(e) {
    dispatch(deleteContact(e.target.id));
  }
  return (
    <ul>
      <ContactItem
        contacts={filterContacts}
        deleteBtnHandler={deleteBtnHandler}
      />
    </ul>
  );
}
