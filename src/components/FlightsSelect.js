import React from 'react';
import PropTypes from 'prop-types';

import BaseSelect from './selectors/BaseSelect';
import CustomSelect from './selectors/CustomSelect';
import DaytimeSelect from './selectors/DaytimeSelect';

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
    this.props.setDaytimeFilter(e.currentTarget.checked);
  }

  render() {
    return (
      <div className='flights-select'>
        <BaseSelect
          carriers={this.props.carriers}
          filter={this.state.filter}
          onChange={this.handleBaseFilterSelect}
        />
        <CustomSelect
          carriers={this.props.carriers}
          filter={this.state.filter}
          onChange={this.handleCustomFilterSelect}
        />
        <DaytimeSelect
          setDaytimeFilter={this.handleDaytimeSelect}
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
  setDaytimeFilter: PropTypes.func.isRequired
}
