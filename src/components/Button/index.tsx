import React from 'react';
import styles from './Button.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * 버튼 테마
   */
  theme?: 'pink' | 'yellow';
  /**
   * 버튼 곡선
   */
  shape?: 'circle';
}

const Button = (props: ButtonProps) => {
  const { theme = 'pink', shape, children, className } = props;

  return (
    <button
      className={cn(
        'container',
        `theme--${theme}`,
        `shape--${shape}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
