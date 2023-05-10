import React from 'react';
import DayList from './components/Daylist';

import Footer from './components/Footer';

function App() {
  let numbers_of_days = 30;
  let Language_name = "Rust";
  return (
    <>
    <div className="container">
      
      <h1 className='main-heading font-bold p-5'>{numbers_of_days} Days of {Language_name}</h1>
      
      <DayList/>

      <Footer/>
    </div>
    
    </>
  );
}

export default App;
