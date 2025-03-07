import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function SubmitForm({ setQuotes }) {
  const [showAlert, setShowAlert] = useState(false);
  const [fade, setFade] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setShowAlert(true);
      setFade(false);
      const formData = new FormData();
      formData.append("name", e.target["name"].value);
      formData.append("message", e.target["message"].value);
      const response = await axios.post("/api/quote", formData);

      if (response.status === 200) {
        const res = await axios.get("/api/quote");
        setQuotes(res.data);
        setShowAlert(true);
        e.target.reset();

        setTimeout(() => {
          setFade(true);
          // After the fade transition (500ms), remove the alert
          setTimeout(() => {
            setShowAlert(false);
          }, 500);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="flex w-86 md:w-160 justify-center">
      <CardHeader className="text-center">
        <h2 className="text-2xl font-semibold">Submit a quote</h2>
      </CardHeader>
      {/* TODO: implement custom form submission logic to not refresh the page */}
      <CardContent>
        <form
          action="/api/quote"
          method="post"
          onSubmit={handleSubmit}
          id="submit-form"
          className="flex flex-col gap-4"
        >
          <label htmlFor="input-name">Name</label>
          <Input
            type="text"
            name="name"
            id="input-name"
            required
            className="w-full"
          />
          <label htmlFor="input-message">Quote</label>
          <Textarea
            type="text"
            name="message"
            id="input-message"
            required
            className="w-full max-h-45"
          />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
      <CardFooter>
        {showAlert && (
          <Alert
            className={`transition-opacity duration-500 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Quote submitted successfully</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
