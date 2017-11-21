import React from 'react';

const DaytimeSelect = ({ setDaytimeFilter }) => (
  <div className='flights-select__block flights-daytime-select'>
    <label className='flights-daytime-select__label'>
      <input className='flights-daytime-select__input' type='checkbox' onChange={setDaytimeFilter} />&nbsp;
      <span>Только дневные прилёты</span>
    </label>
  </div>
);

export default DaytimeSelect;
