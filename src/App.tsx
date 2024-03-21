import "./App.css";
import Quotes from "../src/components/Quotes";
import Time from "./components/Time";

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <Quotes />
        <Time />
      </div>
    </div>
  );
}

export default App;
