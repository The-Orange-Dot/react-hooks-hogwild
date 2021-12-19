const SortFunction = ({ sortHandler }) => {
  return (
    <select name="sort" id="sort" onChange={sortHandler}>
      <option value="">--Sort the Piggies!---</option>
      <option value="name-a">Sort by name from A</option>
      <option value="name-z">Sort by name from Z</option>
      <option value="weight-light">Sort from lightest</option>
      <option value="weight-heavy">Sort from heaviest</option>
    </select>
  );
};

export default SortFunction;
