import React from "react";

const SpecialButton = ({ symbol, setDisplay, display }) => {
  
  function handleReset() {
    if (symbol === 'C') return setDisplay('')
  }

  function handlePercentage() {
    if (symbol === '%') return setDisplay(display + symbol)
  }
  
  return (
    <div className='special-button' onClick={() => handleReset() || handlePercentage()}>{ symbol }</div>
  );
};

export default SpecialButton;