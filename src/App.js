import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState({
    text: "",
    author: "",
  });
  const getData = async () => {
    const url = "https://quotes15.p.rapidapi.com/quotes/random/";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "267604c5d4mshbb0f82c9db7bf45p157ea4jsnc27e9ce7152e",
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setContent({
        text: result.content,
        author: result.originator.name,
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="quote-box">
      <div className="content">
        <p className="quote">{content.text}</p>
        <p className="author"> - {content.author}</p>
      </div>
      <center>
        <button onClick={getData} className="btn">
          Load Another Quote
        </button>
      </center>
    </div>
  );
}

export default App;
