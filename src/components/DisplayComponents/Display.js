import React from "react";

const Display = ({ display }) => {
  return <div className="display">
  <div className='displayDigit'>{ display }</div>
  </div>;
};

export default Display;
