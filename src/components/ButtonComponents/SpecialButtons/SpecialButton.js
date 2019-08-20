import React from "react";

const SpecialButton = ({ symbol, setDisplay }) => {
  function handleChange () {
    if (symbol === 'C') return setDisplay(0)
  }
  return (
    <div className='special-button' onClick={() => handleChange()}>{ symbol }</div>
  );
};

export default SpecialButton;