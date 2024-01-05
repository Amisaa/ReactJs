
import React, { useEffect, useState } from "react";

const NumberGuessingGame = (props) => {
  const [randomNumber, setRandomNumber] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    //Set random number 
    const num = Math.round(Math.random(100) * 20);
    setRandomNumber(num)
  }, []);

  const handleInputChange = (e) => {
    //set Input number
  };

  useEffect(() => {
    // check if input number matches the random number
    checkNumber();
  }, [inputNumber]);

  const checkNumber = () => {
    if (!inputNumber) {
        //"Enter a number"
    }
    else if (inputNumber < randomNumber) {
      //number is less
    }
    } else if (inputNumber > randomNumber) {
      //number is more
    
    } else {
      //You got it right
      setMessage
    }
  };

  return (
    <div>
      <h4> Guess a number between 1 to 20</h4>
      <input
        type="number"
        min={0}
        max={20}
        value={inputNumber}
        onChange={handleInputChange}
      />
      <br />
      {message}
    </div>
  );
};

export default NumberGuessingGame;

