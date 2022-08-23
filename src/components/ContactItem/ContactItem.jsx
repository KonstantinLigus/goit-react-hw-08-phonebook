import { Box } from 'components/Box';
import { ButtonItemSyled } from './ButtonItemStyled.styled';

export function ContactItem({ contacts, deleteBtnHandler }) {
  return contacts.map(contact => {
    const { name, number, id } = contact;
    return (
      <li key={id}>
        <Box display="inline-block" as="p">
          {name}: {number}
        </Box>
        <ButtonItemSyled type="button" id={id} onClick={deleteBtnHandler}>
          Delete
        </ButtonItemSyled>
      </li>
    );
  });
}
