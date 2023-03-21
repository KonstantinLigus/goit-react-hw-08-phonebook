import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/conatacsSelectors';
import { filter } from 'redux/filterSlice';
import { FilterStyled, FilterWrapper } from './FilterStyled.styled';

export function Filter() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  function changeFilterHandler(e) {
    dispatch(filter(e.target.value));
  }
  if (contacts.length === 0) {
    return null;
  }
  return (
    <FilterWrapper>
      <Box htmlFor="filter" display="block" mb="10px" as="label">
        Find contacts by name
      </Box>
      <FilterStyled
        id="filter"
        type="text"
        name="filter"
        onChange={changeFilterHandler}
      />
    </FilterWrapper>
  );
}
