import React from 'react';
import PropTypes from 'prop-types';

const FlightCard = ({ carrier, direction, arrival, departure, id }) => (
  <article className="flights-widget__item">
    <p className="flights-widget-item__header">
      Авиакомпания: <span>{carrier}</span>
    </p>
    <div className="flights-widget-item__sub">
      <p>
        Откуда: <span>{direction.from}</span>
      </p>
      <p>
        Время вылета: {departure.day}, <strong>{departure.time}</strong>
      </p>
    </div>
    <div className="flights-widget-item__sub">
      <p>
        Куда: <span>{direction.to}</span>
      </p>
      <p>
        Время прилета: {arrival.day}, <strong>{arrival.time}</strong>
      </p>
    </div>
  </article>
);

export default FlightCard;

FlightCard.propTypes = {
  carrier: PropTypes.string.isRequired,
  direction: PropTypes.objectOf(PropTypes.string.isRequired),
  arrival: PropTypes.objectOf(PropTypes.string.isRequired),
  departure: PropTypes.objectOf(PropTypes.string.isRequired)
}