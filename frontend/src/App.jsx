import "./App.css";
import { useState, useEffect } from "react";
import QuotesList from "./components/QuotesList";
import SubmitForm from "./components/SubmitForm";
import RetrieveForm from "./components/RetrieveForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState([]);
  const fetchQuotes = async () => {
    try {
      const response = await axios.get("/api/quote");
      setQuotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //Fetch quotes when the page loads

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <>
      <body>
        <Hero />

        <div className="flex flex-col gap-10 items-center lg:flex-row lg:items-start lg:justify-evenly my-12 ">
          {/*Container containing submit form*/}
          <div className="flex flex-col gap-5 p-5  ">
            <h2 className="text-2xl font-semibold">Submit a quote</h2>
            <SubmitForm setQuotes={setQuotes} />
          </div>

          {/*Container containing quotes and retrieve form*/}
          <div className="flex w-11/12 lg:w-6/12 flex-col gap-5 p-5 h-160 lg:h-150">
            <h2 className="text-2xl font-semibold">Featured Quotes</h2>
            <RetrieveForm setQuotes={setQuotes} />
            <QuotesList quotes={quotes} />{" "}
            {/* TODO: Display the actual quotes from the database */}
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
}

export default App;
