import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import QuotesList from "./components/QuotesList";
import SubmitForm from "./components/SubmitForm";
import RetrieveForm from "./components/RetrieveForm";
import quotebook from "./assets/quotebook.png";
import Footer from "./components/Footer";

function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get("/api/quote");
        setQuotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuotes();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-screen my-2">
        <img src={quotebook} alt="Logo" className="w-20" />
        <h1 className="text-2xl font-bold">Hack at UCI Tech Deliverable</h1>
      </div>
      <div className="flex flex-col gap-10 items-center lg:flex-row lg:justify-around my-12">
        
        <div>
          {/* TODO: include an icon for the quote book */}
          <SubmitForm setQuotes={setQuotes} />
        </div>

        <div className="flex w-10/12 flex-col gap-4 p-5 rounded-md border h-140">
          <RetrieveForm setQuotes={setQuotes} />
          {/* TODO: Display the actual quotes from the database */}
          <QuotesList quotes={quotes} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
