import Quotes from "./Quotes";
import { ScrollArea } from "./ui/scroll-area";

export default function QuotesList({ quotes }) {
  return (
    <>
      <ScrollArea className="bg-[#132020] h-120 lg:h-115 w-full rounded-md py-2 px-5 ">
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
