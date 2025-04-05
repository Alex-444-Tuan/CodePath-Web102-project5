const SearchBar = ({ search, setSearch }) => (
    <input
      type="text"
      placeholder="Search by local timestamp..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
export default SearchBar;  