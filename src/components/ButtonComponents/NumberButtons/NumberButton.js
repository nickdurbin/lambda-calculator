import React from "react";

const NumberButton = ({ setDisplay, name, symbol, display }) => {
  
  const buttonValue = `number-button ${ name }`
  
  function handleClick() {
    setDisplay(display + symbol)
  }

  return (
    <div className={ buttonValue } onClick={() => handleClick()}>
      { symbol }
    </div>
  );
};

export default NumberButton;