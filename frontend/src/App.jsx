import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import QuotesList from "./components/QuotesList";
import SubmitForm from "./components/SubmitForm";
import RetrieveForm from "./components/RetrieveForm";
import quotebook from "./assets/quotebook.png";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <div className="flex flex-col align-center">
        <img src={quotebook} alt="Logo" className="w-20" />
        <h1>Hack at UCI Tech Deliverable</h1>
      </div>
      <div className="flex justify-around">
        {/* TODO: include an icon for the quote book */}
        <div>
          <SubmitForm setQuotes={setQuotes} />
        </div>

        <div className="flex flex-col gap-4 rounded-md border p-4">
          <RetrieveForm setQuotes={setQuotes} />
          {/* TODO: Display the actual quotes from the database */}
          <QuotesList quotes={quotes} />
        </div>
      </div>
    </>
  );
}

export default App;
