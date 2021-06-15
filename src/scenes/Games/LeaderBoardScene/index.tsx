import React from 'react';
import { RouteComponentProps } from 'react-router';
import styles from './LeaderBoardScene.module.scss';
import cb from 'classnames/bind';
import { GameIdMatchParams } from '../GameScene';
import { Link } from 'react-router-dom';

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
    <div>
      <h1 className={cn('title')}>#{game_id}게임 - 리더보드화면</h1>
      <div>
        <h2>LEADERBOARD</h2>
        <Link to="/games">
          <button>Close</button>
        </Link>

        <ol>
          {user_score_items.map((item, idx) => {
            let heart = '';
            for (let i = 0; i < item.clear_heart; i++) {
              heart += '❤️';
            }

            return (
              <li className={cn(idx === 0 && 'rank_one')}>
                {item.user_name} {item.score} [{item.clear_time} / {heart}]
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default LeaderBoardScene;
