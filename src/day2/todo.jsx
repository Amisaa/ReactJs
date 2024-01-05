import React, { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [textlist, setTextList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault(); 
    if (!inputValue) return;
    setTextList([...textlist, inputValue]);
    setInputValue(""); //cleaning the input list 
  };

  const removeItem = (index) => {
    let newList = [...textlist];
    newList.splice(index, 1);
    setTextList(newList);
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <h2>TO DO LIST</h2>
        <label>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your to-do"
          />
        </label>
        <button type="submit">Add TO DO</button>
      </form>
      <ul>
        {textlist.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
