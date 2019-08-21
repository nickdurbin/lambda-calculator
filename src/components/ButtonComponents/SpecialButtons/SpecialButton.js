import React from "react";

const SpecialButton = ({ symbol, setDisplay, display }) => {
  
  function handleReset() {
    if (symbol === 'C') return setDisplay('');
  }

  function handlePercentage() {
    if (symbol === '%') return setDisplay(display + symbol);
  }

  function handleAbsoluteValue() {
    if (symbol === '+/-') return setDisplay(display + symbol);
  }
  
  return (
    <div className='special-button' onClick={() => handleReset() || handlePercentage() || handleAbsoluteValue()}>{ symbol }</div>
  );
};

export default SpecialButton;