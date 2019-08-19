import React from "react";
import { numbers } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  // const [numbers, numberState] = useState(0);
  return (
    <div className="numbersBtnContainer">

      { numbers.map((int) => { return int.numbers }) }

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;