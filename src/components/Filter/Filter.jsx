import { Box } from 'components/Box';
import { FilterStyled } from './FilterStyled.styled';

export function Filter({ filter, changeFilterHandler }) {
  return (
    <>
      <Box htmlFor="filter" display="block" mb="10px" as="label">
        Find contacts by name
      </Box>
      <FilterStyled
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilterHandler}
      />
    </>
  );
}
