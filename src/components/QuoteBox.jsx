import React from "react";
import QuoteButton from "./QuoteButton";

const QuoteBox = ({ quote, newQuote, color }) => {
  return (
    <div style={{ color: color }}>
      <p> {quote.quote}</p>
      <h3>{quote.author} </h3>
      <i className="bx bxs-quote-left"></i>
      <QuoteButton newQuote={newQuote} color={color} />
    </div>
  );
};

export default QuoteBox;
