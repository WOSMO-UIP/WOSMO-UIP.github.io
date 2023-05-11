import React, { useState } from 'react';
import './DayListItem.css';

function DayListItem(props) {
  const [newItemText, setNewItemText] = useState('');
  const [items, setItems] = useState(props.items);

  const handleNewItemChange = (event) => {
    setNewItemText(event.target.value);
  };

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
    <li className="list-group-item rounded-3xl shadow-md mx-4 my-3 p-5 md:p-8">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-medium">{props.title}</h3>
    <div className="flex items-center">
      <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-3 py-1.5 mr-2 transition duration-300 ease-in-out">
        {props.doneText}
        <i className="bi bi-check ms-2"></i>
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white rounded-full px-3 py-1.5 ml-2 transition duration-300 ease-in-out"
        onClick={() => handleDeleteItemClick(index)}
      >
        {props.notDoneText}
        <i className="bi bi-x ms-2"></i>
      </button>
    </div>
  </div>
  <div className="mb-4">
    <textarea
      className="form-control border-gray-400 rounded-3xl px-4 py-3 w-full"
      rows="3"
      placeholder="Add a note..."
    ></textarea>
  </div>
  <form onSubmit={handleNewItemSubmit} className="flex flex-wrap items-center mb-4">
    <div className="flex-1 mb-2 md:mb-0 md:mr-2">
      <input
        type="text"
        className="form-control border-gray-400 rounded-full px-4 py-3 w-full"
        placeholder="Add a new item..."
        value={newItemText}
        onChange={handleNewItemChange}
      />
    </div>
    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-3 py-1.5 md:px-6 md:py-3 transition duration-300 ease-in-out" type="submit">
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
      </li>
    ))}
  </ul>
</li>
  );
}

export default DayListItem;
