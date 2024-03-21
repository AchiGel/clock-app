import "../styles/time.css";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";

function Time() {
  return (
    <div className="time">
      <div className="day-time">
        <img />
        <span>GOOD MORNING</span>
      </div>
      <div className="clock">
        <h2>11:30</h2>
        <span>BST</span>
      </div>
      <div className="city-name">
        <h4>IN LONDON, UK</h4>
      </div>
      <div className="more-less-button">
        <span>MORE</span>
        <button>
          <img src={arrowDown} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Time;
