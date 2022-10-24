import React, { Component } from 'react';
import propsTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, positivePercentage } = this.props;
    return (
      <div>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>Positive feedback: {positivePercentage}%</div>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: propsTypes.number,
  neutral: propsTypes.number,
  bad: propsTypes.number,
  positivePercentage: propsTypes.number,
};

export default Statistics;
