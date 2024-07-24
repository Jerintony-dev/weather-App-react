import "./card.css";

import wind from "../../../src/assets/wind.png";
import clear from "../../../src/assets/clear.png";
import humidity from "../../../src/assets/humidity.png";

function Card({ data }) {
  return (
    <>
      {data == undefined ? (
        <div style={{ padding: 50 }}>
          <h1>Search weather</h1>
        </div>
      ) : (
        <div className="card">
          <div className="weather">
            <img
              src={
                `https://openweathermap.org/img/wn/${data?.data?.weather[0]?.icon}@2x.png` ||
                clear
              }
              style={{ height: 150, width: 150 }}
            ></img>
            <div className="place-temp">
              <h1>{data?.data?.main?.temp || "Search"}</h1>
              <div className="place-title">{data?.data?.name}</div>
            </div>
          </div>
          <div className="weather-data">
            <img src=""></img>
            <div className="Humidity">
              <img
                src={humidity}
                style={{ height: 20, width: 20, margin: 10 }}
              ></img>
              <h5>{data?.data?.main?.humidity}%</h5>
              <span>Humidity</span>
            </div>
            <div className="wind-speed">
              <img
                src={wind}
                style={{ height: 20, width: 20, margin: 10 }}
              ></img>
              <h5>{data?.data?.wind?.speed} Km/h</h5>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
