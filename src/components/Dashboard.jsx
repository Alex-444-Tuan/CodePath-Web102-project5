import { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Summary from "./Summary";
import DataRow from "./DataRow";

const Dashboard = ({ data }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.timestamp_local.includes(search) &&
      (filter === "All" || item.aqi <= parseInt(filter))
    );
  }, [search, filter, data]);

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <Summary data={filteredData} />
      <div>
        {filteredData.slice(0, 10).map((item, index) => (
          <DataRow key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
