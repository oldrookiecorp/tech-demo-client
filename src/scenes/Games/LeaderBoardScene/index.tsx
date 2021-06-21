import React from 'react';
import { RouteComponentProps } from 'react-router';
import styles from './LeaderBoardScene.module.scss';
import cb from 'classnames/bind';
import { GameIdMatchParams } from '../GameScene';
import { Link } from 'react-router-dom';
import Board from '../../../components/Board';
import Button from '../../../components/Button';

const cn = cb.bind(styles);

const LeaderBoardScene = ({
  match
}: RouteComponentProps<GameIdMatchParams>) => {
  const { game_id } = match.params;

  const user_score_items = [
    { user_name: 'user_1', score: 1000, clear_time: '1:00', clear_heart: 5 },
    { user_name: 'user_2', score: 1000, clear_time: '1:00', clear_heart: 4 },
    { user_name: 'user_3', score: 1000, clear_time: '1:00', clear_heart: 3 },
    { user_name: 'user_4', score: 1000, clear_time: '1:00', clear_heart: 2 }
  ];

  return (
    <Board title={`#${game_id} LEADERBOARD`}>
      <Link to="/games">
        <Button className={cn('btn__close')} shape="circle">
          X
        </Button>
      </Link>

      <ol className={cn('rank__container')}>
        {user_score_items.map((item, idx) => {
          let heart = '';
          for (let i = 0; i < item.clear_heart; i++) {
            heart += '❤️';
          }
          return (
            <li className={cn('rank--item', idx === 0 && 'rank--one')}>
              {idx + 1}. {item.user_name} {item.score} [{item.clear_time} /{' '}
              {heart}]
            </li>
          );
        })}
      </ol>
      <Link to={`/game/${game_id}`}>
        <Button className={cn('btn__again')} theme="yellow">
          PLAY AGAIN
        </Button>
      </Link>
    </Board>
  );
};

export default LeaderBoardScene;
