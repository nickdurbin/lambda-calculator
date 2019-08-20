import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

const Numbers = () => {
  const [numbers, setNumbers] = useState(0);
  return (
    <div className="numbersBtnContainer">
      { numbers.map((int) => { return int.numbers }) }
    </div>
  );
};

export default Numbers;