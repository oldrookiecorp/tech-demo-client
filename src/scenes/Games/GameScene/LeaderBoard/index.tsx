/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styles from './LeaderBoard.module.scss';
import cb from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import Board from '../../../../components/Board';
import Button from '../../../../components/Button';
import ScoreListItem, { SocreListType } from './ScoreListItem';

const cn = cb.bind(styles);

interface LeaderBoardProps {
  id: string;
}

const LeaderBoard = (props: LeaderBoardProps) => {
  const { id } = props;
  const game_id = id;
  const history = useHistory();

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
    <Board title={`LEADERBOARD`} className={cn('container')}>
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
      {/* <Link to={`/game/${game_id}`}> */}
      <Button
        className={cn('btn__again')}
        theme="yellow"
        onClick={() => history.go(0)}
      >
        PLAY AGAIN
      </Button>
      {/* </Link> */}
    </Board>
  );
};

export default LeaderBoard;
