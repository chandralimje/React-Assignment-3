import React, { useState } from "react";
import Image from "./Asstes/backgroundImage.jpg";

const State = () => {
  const [counter, setcounter] = useState(10);

  let pop = () => {
    setcounter(counter + 10);
  };
  let pin = () => {
    setcounter(counter - 10);
  };

  return (
    <>
      <h1>Numbers Increment and Decrement : {counter} </h1>
      <button onClick={pop}>Increase</button>
      <button onClick={pin}>Decrease</button>

      <img src={Image} alt="Nature-image" />
    </>
  );
};

export default State;
