import React, { createContext, useContext, useState } from 'react';

const FruitContext = createContext('Apple');

// BaseComponent
const BaseComponent = () => {
  return (
    <div>
      <h1>Base Component</h1>
      <FruitContext.Provider value="Apple
      ">
        <ChildA />
      </FruitContext.Provider>
    </div>
  );
};

// ChildA component
const ChildA = () => {
  return (
    <div>
      <h2>Child A Component</h2>
      <ChildB />
    </div>
  );
};

//ChildB component
const ChildB = () => {
  const fruitName = useContext(FruitContext);

  return (
    <div>
      <h3>Child B Component</h3>
      <p>Fruit Name: {fruitName}</p>
    </div>
  );
};

const Component = () => {
  return (
    <div>
      <BaseComponent />
    </div>
  );
};

export default Component;
