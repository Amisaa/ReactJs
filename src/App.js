
// import './App.css';
import ClickCounter from './day2/clickCounter';
// import UseStateWithObject from './day2/demo';
import UseList from './day2/values';
import ToDoList from './day2/todo';
// import './footer.css';
// import './header.css';
// import './mainContent.css';
// import './sideNav.css';

// import './day2/clickCounter';
function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <ClassParent/> */}
      {/* <Display/> */}
      {/* {<Data/>} */}
      {/* { <DisplayDataButton/>} */}
      {/* {<UseStateWithObject/>} */}


     {/* { <><h1 className="box">HEADER</h1><h1 className="footer">FOOTER</h1><h1 className="nav"></h1><h1 className="text">SIDENAV</h1><h1 className="main"></h1><h1 className="letter">MAINCONTENT</h1></> }  */}

     
     {<ToDoList/>}<br></br>
     {<UseList/>}<br></br>
     {<ClickCounter/>}
      </div>
  );
}

export default App;




    