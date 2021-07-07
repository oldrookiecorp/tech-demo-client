/* eslint-disable no-shadow */
import React, { useRef } from 'react';
import styles from './ScoreListItem.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

export enum SocreListType {
  first = 'first',
  my = 'my',
  firstMy = 'firstMy'
}

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: SocreListType | undefined | boolean;
}

const ScoreListItem = (props: ButtonProps) => {
  const { type, children, className } = props;
  const targetRef = useRef(null);

  return (
    <tr
      className={cn(
        'rank--item',
        (type === SocreListType.first || type === SocreListType.firstMy) &&
          'rank--one',
        type === SocreListType.my && 'rank--my',
        type === SocreListType.firstMy && 'rank--one--my',
        className
      )}
    >
      {children}
    </tr>
  );
};

export default ScoreListItem;
