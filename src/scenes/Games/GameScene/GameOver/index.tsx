/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styles from './GameOver.module.scss';
import cb from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import Board from '../../../../components/Board';
import Button from '../../../../components/Button';
import ScoreListItem, { SocreListType } from '../LeaderBoard/ScoreListItem';

const cn = cb.bind(styles);

interface LeaderBoardProps {
  id?: string;
}

const GameOver = (props: LeaderBoardProps) => {
  // const { id } = props;
  // const game_id = id;
  const history = useHistory();

  return (
    <Board title={`GAMEOVER`}>
      <Link to="/games">
        <Button className={cn('btn__close')} shape="circle">
          X
        </Button>
      </Link>

      <table className={cn('rank__container')}>
        <ScoreListItem>
          <td style={{ width: '40%' }}>NICKNAME</td>
          <td style={{ width: '30%' }}>TIME</td>
          <td style={{ width: '30%' }}>HEART</td>
        </ScoreListItem>
        <ScoreListItem type={SocreListType.my}>
          <td style={{ width: '40%' }}>UserName</td>
          <td style={{ width: '30%' }}>12:00</td>
          <td style={{ width: '30%' }}>❤️❤️🖤🖤🖤</td>
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
