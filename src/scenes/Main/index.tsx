import React from 'react';
import styles from './MainScene.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

const MainScene = () => {
  return (
    <div>
      <h1 className={cn('title')}>메인화면</h1>
    </div>
  );
};

export default MainScene;
