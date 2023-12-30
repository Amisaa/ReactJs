import React, { useState } from 'react';
import Shop from './new';
const DisplayDataButton = () => {
 const [dataVisible, setDataVisible] = useState(false);

 const displayData = () => {
    setDataVisible(true);
 };

 return (
    <div>
         {!dataVisible ? (
        <button onClick={displayData}>Display Data</button>
      ) : null}

      {dataVisible ? <Shop/> : null}
    </div>
 );
};

export default DisplayDataButton;