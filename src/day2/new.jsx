import React, { useState } from "react";

const useTheToDoState = () => {
 const [inputValue, setInputValue] = useState("");
 const [textlist, setTextList] = useState([]);

 const handleInputChange = (e)=>{
    setInputValue(e.target.value)
 }
 const handleAddTodo = (e) => {
    if(!inputValue)return;
    setTextList([...textlist, inputValue]);
    setInputValue("");
 }
 const removeItem=(index)=>{
    let newList=[...textlist];
    newList.splice(index,1);
    setTextList(newList);
    };

 return (
    <><form>
         <h2>TO DO LIST</h2>
         <input
             type={"text"}
             value={inputValue}
             onChange={handleInputChange} />
         <button onClick={handleAddTodo}>Add TODO</button>
     </form><ul>
             {textlist.map((item, index) => (
                 <li key={index}>{item}
                 <button onClick={()=>removeItem(index)}>Remove</button>
                 </li>
             ))}
         </ul></>
                );
                };
export default useTheToDoState;