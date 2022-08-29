import { Box } from 'components/Box';
import { ButtonItemSyled } from './ButtonItemStyled.styled';
import { ContactItemStyled } from './ContactItemStyled.styled';

export function ContactItem({ contacts, deleteBtnHandler }) {
  return contacts.map(contact => {
    const { name, number, id } = contact;
    return (
      <ContactItemStyled key={id}>
        <Box display="inline-block" width={400} as="p">
          {name}: {number}
        </Box>
        <ButtonItemSyled type="button" id={id} onClick={deleteBtnHandler}>
          Delete
        </ButtonItemSyled>
      </ContactItemStyled>
    );
  });
}
