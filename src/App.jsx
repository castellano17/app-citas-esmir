import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";

const arrayColors = [
  "#84b6f4",
  "#fdcae1",
  "#fcb7af",
  "#b8e4ff",
  "#d3bcf6",
  "#f3a8c2",
  "#ffbfb0",
  "#9ce0db",
  "#ffd971",
  "#ffa43a",
  "#68da3e",
  "#e6a15c",
  "#d018ef",
];

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex];
};
function App() {
  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db));
    setColor(getRandom(arrayColors));
  };

  // console.log(getRandom(db));

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuoteBox quote={quote} newQuote={newQuote} color={color} />
    </div>
  );
}

export default App;
