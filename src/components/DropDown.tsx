import "../styles/dropDown.css";

function DropDown() {
  return (
    <div className="drop-down">
      <div>
        <h3>CURRENT TIMEZONE</h3>
        <h4>Europe/London</h4>
      </div>
      <div>
        <h3>Day of the year</h3>
        <h4>295</h4>
      </div>
      <div>
        <h3>Day of the week</h3>
        <h4>5</h4>
      </div>
      <div>
        <h3>Week number</h3>
        <h4>42</h4>
      </div>
    </div>
  );
}

export default DropDown;
