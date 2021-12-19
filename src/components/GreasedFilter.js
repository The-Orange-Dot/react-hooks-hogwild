const GreasedFilter = ({ filterHandler }) => {
  return (
    <>
      <input
        type="radio"
        name="greased-selector"
        id="either"
        value="either"
        onClick={filterHandler}
        defaultChecked
      />
      <label htmlFor="either">Either</label>
      <input
        type="radio"
        name="greased-selector"
        id="greased"
        value="greased"
        onClick={filterHandler}
      />
      <label htmlFor="greased">Greased</label>
      <input
        type="radio"
        name="greased-selector"
        id="not-greased"
        value="not-greased"
        onClick={filterHandler}
      />
      <label htmlFor="not-greased">Not Greased</label>
    </>
  );
};

export default GreasedFilter;
