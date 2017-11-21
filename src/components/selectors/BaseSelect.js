import React from 'react';

const BaseSelect = ({ carriers, filter, onChange }) => (
  <div className='flights-select__block'>
    <span> Авиакомпания: </span>
    <select name='carriers' onChange={onChange} value={filter}>
      <option key='0'>
        Все авиакомпании
      </option>
      {carriers.map((item, index) => (
        <option
          key={index + 1}
          name={item}
        >
          {item}
        </option>
      ))}
    </select>
  </div>
);

export default BaseSelect;
