import React, { useState } from 'react';
import './DayListItem.css';

function DayListItem(props) {
  const [newItemText, setNewItemText] = useState('');
  const [items, setItems] = useState([]);

  const handleNewItemSubmit = (event) => {
    event.preventDefault();
    if (newItemText.trim()) {
      setItems([...items, newItemText]);
      setNewItemText('');
    }
  };

  const handleDeleteItemClick = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <li className="list-group-item rounded-md shadow-md mx-4 my-3 p-5 md:p-8 "
    // style={{ width: '100%' }}
    >
      <div className="flex justify-between items-center mb-3 md:mb-5 lg:mb-7">
        <h3 className="text-lg font-medium overflow-x-auto">{props.title}</h3>
      </div>


      <form onSubmit={handleNewItemSubmit} className="flex flex-wrap flex-col md:flex-row items-center mb-4 justify-center">
        <div className="flex-1 mb-2 md:mb-0 md:mr-2">
          <input
            type="text"
            className="form-control border-gray-400 rounded-md px-4 py-3 w-full"
            placeholder="Add a new item..."
            value={newItemText}
            onChange={(event) => setNewItemText(event.target.value)}
          />
        </div>
        <button
          className="border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200 mt-2 md:mt-0 md:ml-2"
          type="submit"
          style={{ order: [2, 1] }} // Swap order on smaller screens
        >
          Add
          <i className="bi bi-plus ms-2"></i>
        </button>
      </form>


      <ul className="list-group sub-items">
        {items.map((item, index) => (
          <li className="list-group-item d-flex align-items-center py-2" key={index}>
            <span className="me-2 text-gray-600">{index + 1}.</span>
            <span className="text-gray-600">{item}</span>
            <div className="form-check ms-auto">
              <input className="form-check-input custom-checkbox" type="checkbox" value="" id={`${props.type}-checkbox-${index + 1}`} />
              <label className="form-check-label ms-2 text-gray-600 font-medium" htmlFor={`${props.type}-checkbox-${index + 1}`}>
                {props.checkboxText}
              </label>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded-md px-1.5 py-0.125 ml-2 transition duration-300 ease-in-out"
              onClick={() => handleDeleteItemClick(index)}
            >
              <i className="bi bi-x"></i>
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DayListItem;
