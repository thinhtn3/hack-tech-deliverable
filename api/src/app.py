from contextlib import asynccontextmanager
from datetime import datetime
from typing import AsyncIterator

from fastapi import FastAPI, Form, status
from fastapi.responses import RedirectResponse
from typing_extensions import TypedDict

from services.database import JSONDatabase
from utils.date import get_max_age


class Quote(TypedDict):
    name: str
    message: str
    time: str

database: JSONDatabase[list[Quote]] = JSONDatabase("data/database.json")

@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    """Handle database management when running app."""
    if "quotes" not in database:
        print("Adding quotes entry to database")
        database["quotes"] = []

    yield

    database.close()


app = FastAPI(lifespan=lifespan)


@app.post("/quote")
def post_message(name: str = Form(), message: str = Form()) -> RedirectResponse:
    """
    Process a user submitting a new quote.
    You should not modify this function except for the return value.
    """
    now = datetime.now()
    quote = Quote(name=name, message=message, time=now.isoformat(timespec="seconds"))
    database["quotes"].append(quote)

    # You may modify the return value as needed to support other functionality
    return RedirectResponse("/", status.HTTP_200_OK)


# TODO: add another API route with a query parameter to retrieve quotes based on max age COMPLETED
@app.get("/quote")
def get_messages(max_age: int = 0):
    quotes = database["quotes"]
    if max_age == 0:
        return quotes
    elif max_age > 0:
        from_date = datetime.fromisoformat(get_max_age(max_age))
        filtered_quotes = []
        for quote in quotes:
            quote_time = datetime.fromisoformat(quote["time"])
            if quote_time > from_date:
                filtered_quotes.append(quote)
        return filtered_quotes