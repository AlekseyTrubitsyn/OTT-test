import React from 'react';

const CustomSelect = ({ carriers, filter, onChange }) => (
  <div className='flights-select__block flights-custom-select'>
    <span> Авиакомпания: </span>&nbsp;<span className='flights-custom-select__current'>{filter || 'Все авиакомпании'}</span>
    <ul className='flights-custom-select__list' onClick={onChange}>
      <li className='flights-custom-select__item' key="0" id='Все авиакомпании'>
        Все&nbsp;авиакомпании
      </li>
      {carriers.map((item, index) => (
        <li
          key={index + 1}
          id={item}
          className='flights-custom-select__item'
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default CustomSelect;
