import React from 'react';
import PropTypes from 'prop-types';

import FlightCard from './FlightCard';

const FlightsList = ({ filteredFlights }) => (
  <div className="flights-widget__list">
    {filteredFlights.map(item => {
      return (
        <FlightCard
          key={item.id}
          id={item.id}
          carrier={item.carrier}
          direction={item.direction}
          arrival={item.arrival}
          departure={item.departure}
        />
      );
    })}
  </div>
);

export default FlightsList;

FlightsList.propTypes = {
  filteredFlights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      carrier: PropTypes.string.isRequired,
      direction: PropTypes.object.isRequired,
      arrival: PropTypes.object.isRequired,
      departure: PropTypes.object.isRequired
    }))
}
