import { ContactItem } from 'components/ContactItem/ContactItem';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';

export function ContactsList() {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterToLowerCase = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  function deleteBtnHandler(e) {
    dispatch(deleteContact(e.target.id));
  }
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!error && (
        <ul>
          {filterContacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteBtnHandler={deleteBtnHandler}
            />
          ))}
        </ul>
      )}
      {contacts.length === 0 && <p>There is empty here</p>}
    </>
  );
}
