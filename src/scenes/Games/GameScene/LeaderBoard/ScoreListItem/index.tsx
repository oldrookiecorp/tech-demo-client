import React from 'react';
import styles from './ScoreListItem.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

export enum SocreListType {
  first = 'first',
  my = 'my'
}

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: SocreListType | undefined | boolean;
}

const ScoreListItem = (props: ButtonProps) => {
  const { type, children, className } = props;

  return (
    <tr
      className={cn(
        'rank--item',
        type === SocreListType.first && 'rank--one',
        type === SocreListType.my && 'rank--my',
        className
      )}
    >
      {children}
    </tr>
  );
};

export default ScoreListItem;
