/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styles from './GameOver.module.scss';
import cb from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import Board from '../../../../components/Board';
import Button from '../../../../components/Button';
import ScoreListItem, { SocreListType } from '../LeaderBoard/ScoreListItem';
import { scoreHeartParser } from '../../../../lib/scoreHeartParser';
import { scoreTimeParser } from '../../../../lib/scoreTimeParser';

const cn = cb.bind(styles);

export interface overData {
  user_name: string;
  cur_obj: number;
  cur_time: number;
  cur_heart: number;
  total_obj: number;
  total_time: number;
  total_heart: number;
}

interface LeaderBoardProps {
  id?: string;
  data: overData;
}

const GameOver = (props: LeaderBoardProps) => {
  const { data } = props;
  // const game_id = id;
  const history = useHistory();

  return (
    <Board title={`GAMEOVER`} className={cn('container')}>
      <Link to="/games">
        <Button className={cn('btn__close')} shape="circle">
          X
        </Button>
      </Link>

      <table className={cn('rank__container')}>
        <ScoreListItem>
          <td style={{ width: '40%' }}>NICKNAME</td>
          <td style={{ width: '20%' }}>REMAINS</td>
          <td style={{ width: '20%' }}>TIME</td>
          <td style={{ width: '20%' }}>HEART</td>
        </ScoreListItem>
        <ScoreListItem type={SocreListType.my}>
          <td style={{ width: '40%' }}>{data.user_name}</td>
          <td style={{ width: '20%' }}>
            {data.cur_obj} / {data.total_obj}
          </td>
          <td style={{ width: '20%' }}>{scoreTimeParser(data.cur_time)}</td>
          <td style={{ width: '20%' }}>
            {scoreHeartParser(data.cur_heart, data.total_heart)}
          </td>
        </ScoreListItem>
      </table>

      <Button
        className={cn('btn__again')}
        theme="yellow"
        onClick={() => history.go(0)}
      >
        PLAY AGAIN
      </Button>
    </Board>
  );
};

export default GameOver;
