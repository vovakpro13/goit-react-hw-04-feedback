import React, { Component } from 'react';
import propsTypes from 'prop-types';

import styles from 'components/Notification/style.module.css';

class Notification extends Component {
  render() {
    const { message } = this.props;

    return <span className={styles.message}>{message}</span>;
  }
}

Notification.propTypes = {
  message: propsTypes.string,
};

export default Notification;
