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
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{message}</p>
      </CardContent>
      <CardFooter>
        <p>{formattedDate}</p>
      </CardFooter>
    </Card>
  );
}
