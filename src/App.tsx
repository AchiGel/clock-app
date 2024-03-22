import "./App.css";
import Quotes from "../src/components/Quotes";
import Time from "./components/Time";
import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isDay, setIsDay] = useState(false);
  return (
    <div className={isDay ? "App" : "app-night"}>
      <div className="overlay">
        <Quotes isClicked={isClicked} />
        <Time
          isDay={isDay}
          setIsDay={setIsDay}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        {isClicked ? <DropDown /> : null}
      </div>
    </div>
  );
}

export default App;
