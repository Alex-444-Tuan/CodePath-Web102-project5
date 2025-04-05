import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
const API_KEY = '8f7c87ce48d74cef876bf98f9af5e473';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetch(`https://api.weatherbit.io/v2.0/history/airquality?lat=35.5&lon=-78.0&key=${API_KEY}`);
      setData(result.data);
    };
    loadData();
  }, []);// 👀 this helps find the issue

  return (
    
    <Dashboard data={data} />
  )
}

export default App;
