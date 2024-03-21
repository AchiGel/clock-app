import { useEffect, useState } from "react";
import refresh from "../assets/desktop/icon-refresh.svg";

function Quotes() {
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
    console.log(data);
  }

  return (
    <div className="quotes-box">
      <div>
        <h3>{quoteText}</h3>
        <h2>{quoteAuthor}</h2>
      </div>
      <button>
        <img src={refresh} alt="refreshBtn" />
      </button>
    </div>
  );
}

export default Quotes;
