import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";

const arrayColors = [
  "#84b6f4",
  "#fdcae1",
  "#c5c6c8",
  "#fcb7af",
  "#b8e4ff",
  "#ffe4e1",
  "#dcd9f8",
  "#c7f6d4",
  "#d3bcf6",
  "#f3a8c2",
  "#ffbfb0",
  "#dcffff",
  "#9ce0db",
  "#dac9df",
  "#f0ebd7",
  "#f5e1ce",
  "#ffd971",
  "#fdcae1",
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
