import { useEffect, useState } from "react";
import "../styles/dropDown.css";
import axios from "axios";

function DropDown() {
  const [timezone, setTimezone] = useState("");
  const [dayOfTheYear, setDayOfTheYear] = useState("");
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");
  const [weekNumber, setWeekNumber] = useState("");

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("http://worldtimeapi.org/api/timezone/Asia/Tbilisi")
      .then((res) => res.data)
      .then((data) => {
        setTimezone(data.timezone);
        setDayOfTheWeek(data.day_of_week);
        setDayOfTheYear(data.day_of_year);
        setWeekNumber(data.week_number);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="drop-down">
      <div>
        <h3>CURRENT TIMEZONE</h3>
        <h4>{timezone}</h4>
      </div>
      <div>
        <h3>Day of the year</h3>
        <h4>{dayOfTheYear}</h4>
      </div>
      <div>
        <h3>Day of the week</h3>
        <h4>{dayOfTheWeek}</h4>
      </div>
      <div>
        <h3>Week number</h3>
        <h4>{weekNumber}</h4>
      </div>
    </div>
  );
}

export default DropDown;
