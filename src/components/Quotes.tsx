import { useEffect, useState } from "react";
import refresh from "../assets/desktop/icon-refresh.svg";
import "../styles/quotes.css";

function Quotes(props: any) {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  async function getQuotes() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuoteAuthor(data.author);
    setQuoteText(data.content);
  }

  return (
    <div className={!props.isClicked ? "quotes-box" : "hidden"}>
      <div className="quote">
        <h3>"{quoteText}"</h3>
        <h2>{quoteAuthor}</h2>
      </div>
      <button>
        <img src={refresh} alt="refreshBtn" />
      </button>
    </div>
  );
}

export default Quotes;
