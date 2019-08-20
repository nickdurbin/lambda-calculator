import React from "react";

const NumberButton = ({ setDisplay, name, symbol}) => {
  
  const buttonValue = `number-button ${ name }`
  
  function handleClick() {
    setDisplay(symbol)
  }
  return (
    <div className={ buttonValue } onClick={() => handleClick()}>
      { symbol }
    </div>
  );
};

export default NumberButton;