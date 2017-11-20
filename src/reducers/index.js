import { FILTER_CARRIERS, FILTER_CARRIERS_ALL, FILTER_DAY_TIME } from '../actions';

function reducer(state, action) {
  let carrierFilter = state.carrierFilter;
  let dayTimeFiltered = state.dayTimeFiltered;

  switch (action.type) {
    case FILTER_CARRIERS_ALL:
      carrierFilter = '';

      return filterFlights();

    case FILTER_CARRIERS:
      carrierFilter = action.filterName;

      return filterFlights();

    case FILTER_DAY_TIME:
      dayTimeFiltered = action.isOn;

      return filterFlights();

    default:
      return state;
  }

  function filterFlights() {
    if (!dayTimeFiltered && carrierFilter === '') {
      return Object.assign({}, state, {
        filteredFlights: state.flights,
        carrierFilter,
        dayTimeFiltered
      })
    }

    return Object.assign({}, state, {
      filteredFlights: state.flights.filter(({ carrier, arrival }) => {
        let filterPassed = (carrierFilter === '') ? true : (carrier === carrierFilter);

        return isTimingOK(arrival) && filterPassed
      }),
      carrierFilter,
      dayTimeFiltered
    });

    function isTimingOK(dateStr) {
      if (!dayTimeFiltered) {
        return true;
      }

      let dh = new Date(dateStr).getUTCHours();
      return (dh >= 10) && (dh <= 18);
    }
  }
}

export default reducer;
