import styles from './Notification.module.scss';

import React from 'react';

type Props = {
  title: string;
  message: string;
  status: string;
};

const Notification: React.FC<Props> = ({ title, message, status }) => {
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
