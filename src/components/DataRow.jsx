const DataRow = ({ item }) => (
    <div className="row">
      <p>{item.timestamp_local}</p>
      <p>AQI: {item.aqi}</p>
      <p>O₃: {item.o3}</p>
      {/* Add more features like PM2.5, CO, etc. */}
    </div>
  );
export default DataRow;  