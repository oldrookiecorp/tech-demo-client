import React from 'react';
import styles from './Indicator.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

const Indicator = () => {
  return (
    <svg className={cn('indicator')} viewBox="0 0 100 100">
      <circle className={cn('circle')} cx="50" cy="50" r="45"></circle>
    </svg>
  );
};

export default Indicator;
