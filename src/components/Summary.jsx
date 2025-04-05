const Summary = ({ data }) => {
    const total = data.length;
    const meanAQI =
      data.reduce((sum, item) => sum + item.aqi, 0) / (total || 1);
    const maxAQI = Math.max(...data.map((item) => item.aqi));
    const minAQI = Math.min(...data.map((item) => item.aqi));
  
    return (
      <div>
        <p>Total Entries: {total}</p>
        <p>Average AQI: {meanAQI.toFixed(2)}</p>
        <p>AQI Range: {minAQI} - {maxAQI}</p>
      </div>
    );
  };
export default Summary;  