const SearchBox = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} placeholder="Search contacts..." />
);

export default SearchBox;