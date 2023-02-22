import { Box } from 'components/Box';
import { ButtonItemSyled } from './ButtonItemStyled.styled';

export function ContactItem({
  contact: { name, phone, _id },
  deleteBtnHandler,
}) {
  return (
    <>
      <Box display="inline-block" width={400} as="p">
        {name}: {phone}
      </Box>
      <ButtonItemSyled type="button" id={_id} onClick={deleteBtnHandler}>
        Delete
      </ButtonItemSyled>
    </>
  );
}
