import React from 'react';
import propsTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, positivePercentage }) => {
  return (
    <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Positive feedback: {positivePercentage}%</div>
    </div>
  );
};

Statistics.propTypes = {
  good: propsTypes.number.isRequired,
  neutral: propsTypes.number.isRequired,
  bad: propsTypes.number.isRequired,
  positivePercentage: propsTypes.number.isRequired,
};

export default Statistics;
