import React, { Children } from 'react';
import styles from './Board.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

interface BoardProps {
  children?: React.ReactNode;
  title?: string;
}

const Board = (props: BoardProps) => {
  const { children, title = '' } = props;

  return (
    <div className={cn('container')}>
      {title && (
        <div className={cn('title__container')}>
          <h1 className={cn('title')}>{title}</h1>
        </div>
      )}
      <div className={cn('wrapper')}>{children}</div>
    </div>
  );
};

export default Board;
