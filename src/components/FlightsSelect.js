import React from 'react';
import PropTypes from 'prop-types';

const BaseSelect = ({ carriers, filter, onChange, setDayTimeFilter }) => (
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

const CustomSelect = ({ carriers, filter, onChange, setDayTimeFilter }) => (
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

const DayTimeSelect = ({ carriers, filter, setDayTimeFilter }) => (
  <div className='flights-select__block flights-daytime-select'>
    <label className='flights-daytime-select__label'>
      <input className='flights-daytime-select__input' type='checkbox' onChange={setDayTimeFilter} />&nbsp;
      <span>Только дневные прилёты</span>
    </label>
  </div>
)

class FlightsSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: props.filter
    }

    this.handleBaseFilterSelect = this.handleBaseFilterSelect.bind(this);
    this.handleCustomFilterSelect = this.handleCustomFilterSelect.bind(this);
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
    this.handleDaytimeSelect = this.handleDaytimeSelect.bind(this);
  }

  handleBaseFilterSelect(e) {
    this.handleFilterSelect(e.currentTarget.value);
  }

  handleCustomFilterSelect(e) {
    this.handleFilterSelect(e.target.id);
  }

  handleFilterSelect(filter) {
    this.setState({
      filter
    });

    this.props.onChange(filter);
  }

  handleDaytimeSelect(e) {
    this.props.setDayTimeFilter(e.currentTarget.checked);
  }

  render() {
    return (
      <div className='flights-select'>
        <BaseSelect
          carriers={this.props.carriers}
          filter={this.state.filter}
          onChange={this.handleBaseFilterSelect}
          setDayTimeFilter={this.handleDaytimeSelect}
        />
        <CustomSelect
          carriers={this.props.carriers}
          filter={this.state.filter}
          onChange={this.handleCustomFilterSelect}
          setDayTimeFilter={this.handleDaytimeSelect}
        />
        <DayTimeSelect
          carriers={this.props.carriers}
          filter={this.state.filter}
          onChange={this.handleFilterSelect}
          setDayTimeFilter={this.handleDaytimeSelect}
        />
      </div>
    )
  }
}

export default FlightsSelect;

FlightsSelect.propTypes = {
  carriers: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  setDayTimeFilter: PropTypes.func.isRequired
}
