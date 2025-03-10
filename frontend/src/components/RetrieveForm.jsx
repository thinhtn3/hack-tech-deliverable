import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import axios from "axios";

export default function RetrieveForm({ setQuotes }) {
  const handleRetrieve = async (e) => {
    e.preventDefault();
    const maxAge = e.target["max-age"].value;
    const repsonse = await axios.get(`/api/quote?max_age=${maxAge}`);
    setQuotes(repsonse.data);
  };

  return (
    <form action="/api/quote" method="get" onSubmit={handleRetrieve} className="flex gap-8 h-10">
      <Select name="max-age">
        <SelectTrigger className="w-5/12 text-[#F2E2CE]">
          <SelectValue placeholder="Get Messages From.." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7">Past Week</SelectItem>
          <SelectItem value="30">Past Month</SelectItem>
          <SelectItem value="365">Past Year</SelectItem>
          <SelectItem value="0">All Time</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-4/12 text-xs md:text-sm ">Get Messages</Button>
    </form>
  );
}
