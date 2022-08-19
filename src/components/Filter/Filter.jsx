export function Filter({ filter, changeFilterHandler }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilterHandler}
      />
    </>
  );
}
