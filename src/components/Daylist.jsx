import React from 'react';
import DayListItem from './DayListItem';
import data from '../data';



function DayList() {
  return (
    <ul className="list-group  rounded-3xl bg-black">
      {data.map((day, index) => (
        <DayListItem key={index} {...day} />
        
      ))}
    </ul>
  );
}

export default DayList;
