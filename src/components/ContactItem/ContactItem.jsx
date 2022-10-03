import { Box } from 'components/Box';
import { ButtonItemSyled } from './ButtonItemStyled.styled';
import { ContactItemStyled } from './ContactItemStyled.styled';

export function ContactItem({
  contact: { name, phone, id },
  deleteBtnHandler,
}) {
  return (
    <ContactItemStyled>
      <Box display="inline-block" width={400} as="p">
        {name}: {phone}
      </Box>
      <ButtonItemSyled type="button" id={id} onClick={deleteBtnHandler}>
        Delete
      </ButtonItemSyled>
    </ContactItemStyled>
  );
}
