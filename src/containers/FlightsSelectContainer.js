import { connect } from 'react-redux';

import { filterCarriers, setDaytimeFilter } from '../actions';
import FlightsSelect from '../components/FlightsSelect';

function mapStateToProps(state) {
  return {
    carriers: state.carriers,
    filter: state.filterCarriers
  }
}

function mapDispatchToProps(dispatch) {

  return {
    onChange: (name) => dispatch(filterCarriers(name)),
    setDaytimeFilter: (value) => dispatch(setDaytimeFilter(value))
  }
}

const CarrierSelectContainer = connect(mapStateToProps, mapDispatchToProps)(FlightsSelect);

export default CarrierSelectContainer;
