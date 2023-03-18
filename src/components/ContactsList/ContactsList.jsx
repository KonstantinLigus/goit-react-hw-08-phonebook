import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/conatacsSelectors';
import { ContactItemStyled } from 'components/ContactsList/ContactsListStyled.styled';

export const ContactsList = props => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterToLowerCase = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!error && (
        <ul>
          {filteredContacts.map(contact => (
            <ContactItemStyled key={contact._id}>
              <ContactItem contact={contact} {...props} />
            </ContactItemStyled>
          ))}
        </ul>
      )}
      {contacts.length === 0 && <p>There is empty here</p>}
    </>
  );
};
