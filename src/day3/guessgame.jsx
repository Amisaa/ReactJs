import React, { useState } from 'react';

function NumberGuessingGame() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [guess, setGuess] = useState('');
  const [tries, setTries] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
      alert('Please enter a valid number between 1 and 20.');
      return;
    }

    setTries([...tries, userGuess]);

    if (userGuess === number) {
      setFeedback('Congratulations! You guessed the number.');
    } else if (userGuess > number) {
      setFeedback('The number is lower than your guess.');
    } else {
      setFeedback('The number is higher than your guess.');
    }
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 20:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="20"
          value={guess}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{feedback}</p>
      <ul>
        {tries.map((tryValue, index) => (
          <li key={index}>Try {index + 1}: {tryValue}</li>
        ))}
      </ul>
    </div>
  );
}

export default NumberGuessingGame;
