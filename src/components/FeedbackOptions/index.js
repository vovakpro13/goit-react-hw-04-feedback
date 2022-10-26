import React from 'react';
import propsTypes from 'prop-types';

import styles from 'components/FeedbackOptions/style.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          className={styles.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propsTypes.arrayOf(propsTypes.string).isRequired,
  onLeaveFeedback: propsTypes.func.isRequired,
};

export default FeedbackOptions;
