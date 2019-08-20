import React from "react";

const SpecialButton = ({ symbol, setDisplay }) => {
  function calculate () {
    if (symbol === 'C') return setDisplay(0)
  }
  return (
    <div className='special-button' onClick={() => calculate()}>{ symbol }</div>
  );
};

export default SpecialButton;