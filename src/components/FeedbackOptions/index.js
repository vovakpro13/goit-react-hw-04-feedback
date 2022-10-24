import React, { Component } from 'react';
import propsTypes from 'prop-types';

import styles from 'components/FeedbackOptions/style.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <button
            key={option}
            className={styles.button}
            onClick={() => this.props.onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: propsTypes.arrayOf(propsTypes.string),
  onLeaveFeedback: propsTypes.func,
};

export default FeedbackOptions;
