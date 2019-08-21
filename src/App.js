import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

function App() {
  
  const [display, setDisplay] = useState(0);

  return (
    <div className="back-container">
      <div className="main-container">
        <Logo />
        <Display display={display}/>
        <div className='buttons-container'>
          <div className="special-number">
            <Specials setDisplay={setDisplay} display={display}/>
            <Numbers setDisplay={setDisplay} display={display}/>
          </div>
          <div className="operators">
            <Operators setDisplay={setDisplay} display={display}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;