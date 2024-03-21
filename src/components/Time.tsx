import "../styles/time.css";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import { useEffect, useState } from "react";

function Time(props: any) {
  const [currentTime, setCurrentTime] = useState("");
  const [clientIp, setClientIp] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const time = new Date(currentTime);
  const hours = time.getHours();
  const minutes = time.getMinutes();

  useEffect(() => {
    getTime();
    getCityAndCountry();
  }, []);

  async function getTime() {
    try {
      const response = await fetch(
        "http://worldtimeapi.org/api/timezone/Asia/Tbilisi"
      );
      const data = await response.json();
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }

      setClientIp(data.client_ip);
      setCurrentTime(data.datetime);
    } catch (error) {
      console.error(error);
    }
  }

  async function getCityAndCountry() {
    try {
      const response = await fetch(
        `https://api.ipbase.com/v2/info?ip=${clientIp}`
      );
      const data = await response.json();
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }
      setCountry(data.location.country.alpha2);
      setCity(data.city.name);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="time">
      <div className="day-time">
        <img src={sunIcon} alt="" />
        <span>GOOD MORNING</span>
      </div>
      <div className="clock">
        <h2>
          {hours}:{minutes}
        </h2>
        <span>BST</span>
      </div>
      <div className="city-name">
        <h4>
          IN {city}, {country}
        </h4>
      </div>
      <div className="more-less-button">
        <span>MORE</span>
        <button
          onClick={() => {
            props.setIsClicked(!props.isClicked);
          }}
        >
          <img src={arrowDown} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Time;
