import Quotes from "./Quotes";
import { ScrollArea } from "./ui/scroll-area";

export default function QuotesList({ quotes }) {
  return (
    <>
      <h2 className="font-bold">Featured Quotes</h2>
      <ScrollArea className="h-110 w-full rounded-md border p-2">
        {quotes.map((quote, i) => (
          <Quotes
            key={i}
            name={quote.name}
            message={quote.message}
            time={quote.time}
          />
        ))}
      </ScrollArea>
    </>
  );
}
