import { useQuery } from "react-query";
import "./App.css";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import axios from "axios";
import { useState } from "react";



function App() {

  const [district, setDistrict] = useState("");

  const FetchData = async () => {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${district}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
    );
  };
  const { data, refetch} = useQuery({
    queryKey: "weatherData",
    queryFn: FetchData,
  });



  return (
    <>
      <div className="loading">Loading...</div>
      <div className="app">
        <div className="container">
          <Search refetch={refetch} setDistrict={setDistrict} />
          <Card data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
