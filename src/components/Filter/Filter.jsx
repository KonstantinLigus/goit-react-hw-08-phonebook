import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'reducer/actions';
import { getFilter } from 'reducer/selectors';
import { FilterStyled } from './FilterStyled.styled';

export function Filter() {
  const filterValue = useSelector(getFilter);
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
        value={filterValue}
        onChange={changeFilterHandler}
      />
    </>
  );
}
