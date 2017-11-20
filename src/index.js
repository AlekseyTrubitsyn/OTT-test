import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import { flights } from './data.json';

import { getUniqueCarriers } from './utilities';

import FlightsSelectContainer from './containers/FlightsSelectContainer';
import FlightsListContainer from './containers/FlightsListContainer';

let state = {
  flights,
  filteredFlights: flights,
  carriers: getUniqueCarriers(flights),
  carrierFilter: '',
  dayTimeFiltered: false
}

const store = createStore(reducer, state);

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Тестовое задание OneTwoTrip</h1>
      <FlightsSelectContainer />
      <FlightsListContainer />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
