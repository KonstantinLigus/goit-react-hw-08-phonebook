import { Box } from 'components/Box';
import { ButtonItemSyled } from './ButtonItemStyled.styled';

export function ContactItem({
  contact: { name, number, id },
  deleteBtnHandler,
}) {
  return (
    <>
      <Box display="inline-block" width={400} as="p">
        {name}: {number}
      </Box>
      <ButtonItemSyled type="button" id={id} onClick={deleteBtnHandler}>
        Delete
      </ButtonItemSyled>
    </>
  );
}
