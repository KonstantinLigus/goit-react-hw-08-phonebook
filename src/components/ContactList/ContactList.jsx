import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

export function ContactList({ contacts, deleteBtnHandler }) {
  return (
    <ul>
      <ContactItem contacts={contacts} deleteBtnHandler={deleteBtnHandler} />
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
