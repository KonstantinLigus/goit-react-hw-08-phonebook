import { Box } from 'components/Box';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';
import { FilterStyled } from './FilterStyled.styled';

export function Filter() {
  const dispatch = useDispatch();
  function changeFilterHandler(e) {
    dispatch(filter(e.target.value));
  }
  return (
    <>
      <Box htmlFor="filter" display="block" mb="10px" as="label">
        Find contacts by name
      </Box>
      <FilterStyled
        id="filter"
        type="text"
        name="filter"
        onChange={changeFilterHandler}
      />
    </>
  );
}
