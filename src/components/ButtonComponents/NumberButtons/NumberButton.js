import React from "react";

const NumberButton = ({ setDisplay, name, symbol}) => {
  
  const classes = `number-button ${ name }`
  
  function calculate() {
    setDisplay(symbol)
  }
  return (
    <div className={ classes } onClick={() => calculate()}>
      { symbol }
    </div>
  );
};

export default NumberButton;