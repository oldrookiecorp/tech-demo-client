import React from 'react';
import styles from './Indicator.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

interface IndicatorProps {
  type?: 'dots' | 'circle';
}

const Indicator = (props: IndicatorProps) => {
  const { type = 'dots' } = props;

  if (type === 'dots') {
    return (
      <div>
        <div className={cn('dot-flashing')} />
      </div>
    );
  } else {
    return (
      <svg className={cn('indicator')} viewBox="0 0 100 100">
        <circle className={cn('circle')} cx="50" cy="50" r="45" />
      </svg>
    );
  }
};

export default Indicator;
