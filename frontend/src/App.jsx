import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Quotes from "./components/Quotes";
import { use } from "react";

function App() {
  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await axios.get("/api/quote");
      setQuotes(response.data);
    };
    fetchQuotes();
  }, [])
  const [quotes, setQuotes] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", e.target["name"].value);
    formData.append("message", e.target["message"].value);
    const response = await axios.post("/api/quote", formData);
    if (response.status === 200) {
      const repsonse = await axios.get("/api/quote");
      setQuotes(repsonse.data);
    }
  };

  const handleRetrieve = async (e) => {
    e.preventDefault();
    const maxAge = e.target["max-age"].value;
    const repsonse = await axios.get(`/api/quote?max_age=${maxAge}`);
    setQuotes(repsonse.data);
  };

  return (
    <div className="App">
      {/* TODO: include an icon for the quote book */}
      <h1>Hack at UCI Tech Deliverable</h1>

      <h2>Submit a quote</h2>
      {/* TODO: implement custom form submission logic to not refresh the page */}

      <form action="/api/quote" method="post" onSubmit={handleSubmit} id="submit-form">
        <label htmlFor="input-name">Name</label>
        <input type="text" name="name" id="input-name" required />
        <label htmlFor="input-message">Quote</label>
        <input type="text" name="message" id="input-message" required />
        <label htmlFor="max-age">Max Age</label>
        <button type="submit">Submit</button>
      </form>

      <form action="/api/quote" method="get" onSubmit={handleRetrieve}>
        <select name="max-age" id="max-age">
          <option value="7">Past Week</option>
          <option value="30">Past Month</option>
          <option value="365">Past Year</option>
          <option value="0">All Time</option>
        </select>
        <button type="submit">Get Messages</button>
      </form>

      <h2>Previous Quotes</h2>
      {/* TODO: Display the actual quotes from the database */}
      <div className="messages">
        {quotes.map((quote, i) => (
          <Quotes
            key={i}
            name={quote.name}
            message={quote.message}
            time={quote.time}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
