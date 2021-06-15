import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './GameScene.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

export interface GameIdMatchParams {
  game_id: string;
}

const GameScene = ({ match }: RouteComponentProps<GameIdMatchParams>) => {
  const { game_id } = match.params;

  return (
    <div>
      <h1 className={cn('title')}>게임 화면 #{game_id}</h1>
    </div>
  );
};

export default GameScene;
