import React from 'react';
import { useState, useEffect } from 'react';

export function Stars({ rating }) {
  const [rates, setRates] = useState(rating);

  const CalculateRate =
    rates.length > 0
      ? parseFloat(rates.reduce((a, b) => a + b, 0) / rates.length).toFixed(1)
      : 0;
      
  const [rate, setRate] = useState(CalculateRate);

  function handleClick(curr) {
    setRates((prev) => [...prev, curr]);
    rating.push(curr);
  }
  useEffect(() => {
    setRate(CalculateRate);
  }, [rates]);

  return (
    <div className="sterne">
      <div className="sternEines" onClick={() => handleClick(1)}>
        {rate < 1 ? '☆' : '★'}
      </div>
      <div className="sternZwei" onClick={() => handleClick(2)}>
        {rate < 2 ? '☆' : '★'}
      </div>
      <div className="sternDrei" onClick={() => handleClick(3)}>
        {rate < 3 ? '☆' : '★'}
      </div>
      <div className="sternVier" onClick={() => handleClick(4)}>
        {rate < 4 ? '☆' : '★'}
      </div>
      <div className="sternFunf" onClick={() => handleClick(5)}>
        {rate < 5 ? '☆' : '★'}
      </div>
    </div>
  );
}
