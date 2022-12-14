import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/conatactsOperations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/conatacsSelectors';
import { ContactItemStyled } from 'components/ContactsList/ContactItemStyled.styled';

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
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  function deleteBtnHandler(e) {
    dispatch(deleteContact(e.target.id));
  }
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!error && (
        <ul>
          {filterContacts.map(contact => (
            <ContactItemStyled key={contact.id}>
              <ContactItem
                contact={contact}
                deleteBtnHandler={deleteBtnHandler}
              />
            </ContactItemStyled>
          ))}
        </ul>
      )}
      {contacts.length === 0 && <p>There is empty here</p>}
    </>
  );
}
