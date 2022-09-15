import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({});

  async function getQuote() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote({ text: data.content, author: data.author }));
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div
        style={{
          margin: "auto",
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        id="quote-box"
      >
        <p
          id="text"
          style={{ margin: "auto", textAlign: "center", fontWeight: "bold" }}
        >
          "{quote.text}"
        </p>
        <br />
        <p style={{ margin: "auto" }} id="author">
          {quote.author}
        </p>
        <br />
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <button
            style={{ width: "200px", margin: "auto" }}
            onClick={getQuote}
            id="new-quote"
          >
            New Quote
          </button>
          <br />
          <a
            style={{ width: "200px", margin: "auto", textAlign: "center" }}
            href="twitter.com/intent/tweet"
            target="_blank"
            id="tweet-quote"
          >
            Post to Twitter
          </a>
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
