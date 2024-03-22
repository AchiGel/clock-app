import "../styles/time.css";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
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
        if (!response.ok) {
          throw new Error("Failed to fetch time");
        }
        const data = await response.json();
        setClientIp(data.client_ip);
        setCurrentTime(data.datetime);
      } catch (error: any) {
        console.error("Error fetching time:", error.message);
      }
    }

    async function getCityAndCountry() {
      try {
        const response = await fetch(
          `https://api.ipbase.com/v2/info?ip=${clientIp}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch location data");
        }
        const data = await response.json();
        setCountry(data.data.location.country.alpha2);
        setCity(data.data.location.city.name);
        setTimezone(data.data.timezone.id);
      } catch (error: any) {
        console.error("Error fetching location data:", error.message);
      }
    }

    getCityAndCountry();
    const intervalId = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timezone, clientIp]);

  const formattedTime = currentTime ? new Date(currentTime) : null;
  const hours = formattedTime
    ? String(formattedTime.getHours()).padStart(2, "0")
    : "--";
  const minutes = formattedTime
    ? String(formattedTime.getMinutes()).padStart(2, "0")
    : "--";

  if (parseFloat(hours) > 5 && parseFloat(hours) < 18) {
    props.setIsDay(!props.isDay);
  }

  return (
    <div className="time">
      <div>
        <div className="day-time">
          <img
            src={
              parseFloat(hours) > 5 && parseFloat(hours) < 18
                ? sunIcon
                : moonIcon
            }
            alt=""
          />
          <span>
            {parseFloat(hours) < 12 ? "Good Morning" : "Good afternoon"}
          </span>
        </div>
        <div className="clock">
          <h2>
            {hours}:{minutes}
          </h2>
          <span>BST</span>
        </div>
        <div className="city-name">
          <h4>
            IN {city || "--"}, {country || "--"}
          </h4>
        </div>
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
