import { connect } from 'react-redux';
import { getFormatedDate } from '../utilities';

import FlightsList from '../components/FlightsList';

function mapStateToProps(state) {
  return {
    filteredFlights: state.filteredFlights.map(item => {
      let arrival = getFormatedDate(item.arrival);
      let departure = getFormatedDate(item.departure);

      return Object.assign({}, item, {
        arrival,
        departure
      })
    })

  }
}

const FlightsListContainer = connect(mapStateToProps)(FlightsList);

export default FlightsListContainer;