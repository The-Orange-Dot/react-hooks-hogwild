const NameSearch = ({ searchName }) => {
  return (
    <div>
      <input
        type="text"
        onChange={searchName}
        placeholder="Search for your favorite pig!"
      />
    </div>
  );
};

export default NameSearch;
