import React from 'react';
import styles from './GameListScene.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

const GameListScene = () => {
  return (
    <div>
      <h1 className={cn('title')}>게임리스트 화면</h1>
    </div>
  );
};

export default GameListScene;
