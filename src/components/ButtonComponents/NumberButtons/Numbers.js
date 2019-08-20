import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

const Numbers = (props) => {
  const [setNumbers] = useState(numbers);
  return (
    <div className="numbers-container">
      { setNumbers.map((num, index) => { 
        return index !== 9 
        ?
        <NumberButton 
        key={index} 
        symbol={num}
        setDisplay={props.setDisplay} /> 
        : 
        <NumberButton 
        key={index} 
        symbol={ num } 
        name='zero' 
        setDisplay={props.setDisplay} /> 
 })}
    </div>
  );
};

export default Numbers;