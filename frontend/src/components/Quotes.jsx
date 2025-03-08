import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Quotes({ name, message, time }) {
  const dateObj = new Date(time);
  const options = {
    year: "numeric",
    month: "long", // e.g., November
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const formattedDate = dateObj.toLocaleString("en-US", options);
  return (
    <Card className=" w-full py-0 my-4 bg-[#F2E2CE] hover:bg-[#cfc2b1] transition-all duration-300 border-0">
      <CardHeader>
        <p className="border-l-4 px-2 border-black my-5 text-sm md:text-lg text-black">
          {message}
        </p>
      </CardHeader>
      <CardContent className="flex justify-end">
        <CardTitle>- {name}</CardTitle>
      </CardContent>
      <CardFooter className="flex justify-end bg-[#e0d1bf] py-2 text-xs md:text-sm rounded-b-2xl">
        <p>{formattedDate}</p>
      </CardFooter>
    </Card>
  );
}
