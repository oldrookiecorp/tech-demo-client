import React from 'react';
import styles from './GameListScene.module.scss';
import cb from 'classnames/bind';
import { Link } from 'react-router-dom';

const cn = cb.bind(styles);

const game_items = [
  { game_id: '1' },
  { game_id: '2' },
  { game_id: '3' },
  { game_id: '4' }
];

const GameListScene = () => {
  return (
    <div>
      <h1 className={cn('title')}>게임리스트 화면</h1>

      <ul>
        {game_items.map((item) => {
          return (
            <Link to={`/game/${item.game_id}`}>
              <li>Stage{item.game_id}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default GameListScene;
