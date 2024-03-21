import "../styles/time.css";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import { useEffect, useState } from "react";

function Time(props: any) {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [clientIp, setClientIp] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  useEffect(() => {
    async function getTime() {
      try {
        const response = await fetch(
          `http://worldtimeapi.org/api/timezone/${timezone}`
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
        setCountry(data.data.location.country.alpha2);
        setCity(data.data.location.city.name);
        setTimezone(data.data.timezone.id);
      } catch (error) {
        console.error(error);
      }
    }

    getCityAndCountry();
    getTime();
  }, []);

  const time = new Date(currentTime);
  const hours = time.getHours();
  const minutes = time.getMinutes();

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
