import "./App.css";
import Quotes from "../src/components/Quotes";
import Time from "./components/Time";
import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="App">
      <div className="overlay">
        <Quotes isClicked={isClicked} />
        <Time isClicked={isClicked} setIsClicked={setIsClicked} />
        {isClicked ? <DropDown /> : null}
      </div>
    </div>
  );
}

export default App;
