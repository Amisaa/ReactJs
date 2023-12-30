import React, { useState } from 'react';

const UseList = () => {
 const [inputValue, setInputValue] = useState('');
 const [textlist,setTextList] = useState([]);

 const handleInputChange = (e) => {
    setInputValue(e.target.value);
 };
 const handleAddClick = (e) => {
    e.preventDefault();
    setTextList([...textlist, inputValue]);
    setInputValue("");
 };
 
 return (
    <>
    <form>
        <input
          type={'text'}
          value={inputValue}
          onChange= {handleInputChange}
        />
        <button onClick={handleAddClick}>Add</button>
    </form>
    <ol>
        {
            textlist.map((item, index) => (
                <li key={index}>{item}</li>
            ))
        }
    </ol>
    </>
 );
};

export default UseList;