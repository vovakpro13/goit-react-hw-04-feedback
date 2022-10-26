import React from 'react';
import propsTypes from 'prop-types';

import styles from 'components/Notification/style.module.css';

const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

Notification.propTypes = {
  message: propsTypes.string.isRequired,
};

export default Notification;
