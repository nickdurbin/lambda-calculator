import React from "react";

const NumberButton = ({ numbers }) => {
  return (
    <div className='numberBtn'>
     <button className='normal'>{ numbers }</button>
    
    </div>
  );
};

export default NumberButton;