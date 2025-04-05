const Filter = ({ filter, setFilter }) => (
    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
      <option value="All">All AQI</option>
      <option value="5">AQI ≤ 5</option>
      <option value="10">AQI ≤ 10</option>
    </select>
  );
export default Filter;  