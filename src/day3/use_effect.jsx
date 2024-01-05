import React, { useEffect, useState } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(0);

  useEffect(() => {
    console.log("useEffect is run for []", count);
  }, []);

  useEffect(() => {
    console.log("useEffect is run for [count]", count);
    if (count === 5) {
      setShow(1);
    } else {
      setShow(0);
    }
  }, [count]);

  return (
    <div>
      <h1>Example1</h1>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br /> value of show is {show}
    </div>
  );
};

export default Example1;
