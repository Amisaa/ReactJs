import React, { useState } from "react";

const useTheToDoState = () => {
 const [inputValue, setInputValue] = useState("");
 const [textlist, setTextList] = useState([]);
 const [ischecked,setIsChecked] =useState(false);

 const handleInputChange = (e)=>{
    setInputValue(e.target.value)
 }
 const handleAddTodo = (e) => {
    if(!inputValue)return;
    setTextList([...textlist, inputValue]);
    setInputValue("");
 }
 const removeItem=(index)=>{
    const newList=[...textlist];
    newList.splice(index,1);
    setTextList(newList);
    };
    const handleCheckBox =(e)=> {
       const value = e.target.value
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
                  <><>
                   <input type="checkbox" onChange={handleCheckBox}></input>
                </><li key={index}>{item}
                      <button onClick={() => removeItem(index)}>Remove</button>
                   </li></>
             ))}
         </ul></>
                );
                };
export default useTheToDoState;