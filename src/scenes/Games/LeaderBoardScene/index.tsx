import React from 'react';
import { RouteComponentProps } from 'react-router';
import styles from './LeaderBoardScene.module.scss';
import cb from 'classnames/bind';
import { GameIdMatchParams } from '../GameScene';

const cn = cb.bind(styles);

const LeaderBoardScene = ({
  match
}: RouteComponentProps<GameIdMatchParams>) => {
  const { game_id } = match.params;

  return (
    <div>
      <h1 className={cn('title')}>#{game_id}게임 - 리더보드화면</h1>
    </div>
  );
};

export default LeaderBoardScene;
