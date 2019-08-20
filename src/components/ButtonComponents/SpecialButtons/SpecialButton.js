import React from "react";

const SpecialButton = (props) => {
  function handleChange () {
    if (props.symbol === 'C') return props.setDisplay(0)
  }
  return (
    <div className='special-button' onClick={() => handleChange()}>{props.symbol}</div>
  );
};

export default SpecialButton;