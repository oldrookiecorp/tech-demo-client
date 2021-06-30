import React from 'react';
import { RouteComponentProps } from 'react-router';
import styles from './LeaderBoardScene.module.scss';
import cb from 'classnames/bind';
import { GameIdMatchParams } from '../GameScene';
import { Link } from 'react-router-dom';
import Board from '../../../components/Board';
import Button from '../../../components/Button';
import ScoreListItem, { SocreListType } from './ScoreListItem';

const cn = cb.bind(styles);

const LeaderBoardScene = ({
  match
}: RouteComponentProps<GameIdMatchParams>) => {
  const { game_id } = match.params;

  const user_score_items = [
    { user_name: 'user_133', score: 14000, clear_time: '1:00', clear_heart: 5 },
    {
      user_name: 'user_2132213123232',
      score: 3300,
      clear_time: '1:00',
      clear_heart: 4
    },
    { user_name: 'user_3223', score: 2000, clear_time: '1:00', clear_heart: 3 },
    { user_name: 'user_41', score: 1000, clear_time: '1:00', clear_heart: 2 },
    { user_name: 'user_3223', score: 2000, clear_time: '1:00', clear_heart: 3 },
    { user_name: 'user_41', score: 1000, clear_time: '1:00', clear_heart: 2 },
    { user_name: 'user_3223', score: 2000, clear_time: '1:00', clear_heart: 3 },
    { user_name: 'user_41', score: 1000, clear_time: '1:00', clear_heart: 2 },
    { user_name: 'user_3223', score: 2000, clear_time: '1:00', clear_heart: 3 },
    { user_name: 'user_41', score: 1000, clear_time: '1:00', clear_heart: 2 },
    { user_name: 'user_3223', score: 2000, clear_time: '1:00', clear_heart: 3 },
    { user_name: 'user_41', score: 1000, clear_time: '1:00', clear_heart: 2 },
    { user_name: 'user_3223', score: 2000, clear_time: '1:00', clear_heart: 3 },
    { user_name: 'user_41', score: 1000, clear_time: '1:00', clear_heart: 2 }
  ];

  return (
    <Board title={`STAGE${game_id} - LEADERBOARD`}>
      <Link to="/games">
        <Button className={cn('btn__close')} shape="circle">
          X
        </Button>
      </Link>

      <table className={cn('rank__container')}>
        {user_score_items.map((item, idx) => {
          let heart = '';
          for (let i = 0; i < item.clear_heart; i++) {
            heart += '❤️';
          }

          for (let i = 0; i < 5 - item.clear_heart; i++) {
            heart += '🖤';
          }

          return (
            <ScoreListItem
              type={
                idx === 0 ? SocreListType.first : idx === 3 && SocreListType.my
              }
            >
              <th style={{ width: '10%' }}>{idx + 1}.</th>
              <td style={{ width: '30%' }}>{item.user_name}</td>
              <td style={{ width: '10%' }}>{item.clear_time}</td>
              <td style={{ width: '35%' }}>{heart}</td>
              <td style={{ width: '15%' }}>{item.score}</td>
            </ScoreListItem>
          );
        })}
      </table>
      {/* <ol className={cn('rank__container')}>
        {user_score_items.map((item, idx) => {
          let heart = '';
          for (let i = 0; i < item.clear_heart; i++) {
            heart += '❤️';
          }

          for (let i = 0; i < 5 - item.clear_heart; i++) {
            heart += '🖤';
          }

          return (
            <ScoreListItem
              type={
                idx === 0 ? SocreListType.first : idx === 3 && SocreListType.my
              }
            >
              <span>{idx + 1}</span> <span>{item.user_name}</span>{' '}
              <span>
                ⏰ {item.clear_time} / {heart}{' '}
              </span>{' '}
              <span>{item.score}</span>
            </ScoreListItem>
          );
        })}
      </ol> */}
      <Link to={`/game/${game_id}`}>
        <Button className={cn('btn__again')} theme="yellow">
          PLAY AGAIN
        </Button>
      </Link>
    </Board>
  );
};

export default LeaderBoardScene;
