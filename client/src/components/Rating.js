import React from 'react';
import PropTypes from 'prop-types';
const setStars = (value, color) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        <i
          style={{ color }}
          className={
            value >= 1 + i
              ? 'fas fa-star'
              : value >= 0.5 + i
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>,
    );
  }
  return stars;
};
const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {setStars(value, color)}
      <span>{text && text}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
Rating.defaultProps = {
  color: '#f8e825',
};
export default Rating;
