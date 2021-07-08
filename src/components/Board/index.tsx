import React, { useEffect, useRef } from 'react';
import styles from './Board.module.scss';
import cb from 'classnames/bind';
import { animateScroll as scroll } from 'react-scroll';

const cn = cb.bind(styles);

export interface IScrollTarget {
  top: number;
  height: number;
}
interface BoardProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  scrollTarget?: IScrollTarget;
}

const Board = (props: BoardProps) => {
  const { children, title = '', className, scrollTarget } = props;

  // Board Scroll Set
  const scrollRef = useRef<any>();

  useEffect(() => {
    if (scrollTarget) {
      scrollToTarget(scrollTarget);
    }
  }, [scrollTarget]);

  const scrollToTarget = (target: IScrollTarget) => {
    const height = scrollRef.current.offsetHeight;
    scroll.scrollTo(target.top - ((height - 80) / 2 - target.height / 2), {
      duration: -1500,
      smooth: false,
      ignoreCancelEvents: true,
      containerId: 'boardScrollContainer'
    });
  };

  return (
    <div className={cn('container', className)}>
      {title && (
        <div className={cn('title__container')}>
          <h1 className={cn('title')}>{title}</h1>
        </div>
      )}
      <div className={cn('wrapper')} ref={scrollRef} id="boardScrollContainer">
        {children}
      </div>
    </div>
  );
};

export default Board;
