import React from 'react';
import DayList from './components/ToDoListCard/Daylist';

import Footer from './components/ToDoListCard/Footer';

// import TodoList from './components/listCard/ToDoList';

function App() {
  let numbers_of_days = 30;
  let Language_name = "Rust";
  return (
    <>
    <div className="container">
      {/* <TodoList/> */}
      <h1 className='main-heading font-bold p-5'>{numbers_of_days} Days of {Language_name}</h1>
      
      <DayList/>

      {/* <Footer/> */}
    </div>
    
    </>
  );
}

export default App;
