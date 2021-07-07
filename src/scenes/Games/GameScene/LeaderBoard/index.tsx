/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import styles from './LeaderBoard.module.scss';
import cb from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import Board from '../../../../components/Board';
import Button from '../../../../components/Button';
import ScoreListItem, { SocreListType } from './ScoreListItem';
import { scoreTimeParser } from '../../../../lib/scoreTimeParser';
import { scoreHeartParser } from '../../../../lib/scoreHeartParser';

const cn = cb.bind(styles);

interface stageData {
  heartCnt: number;
}

export interface clearListItem {
  id: number;
  clearHeart: number;
  clearTime: number;
  score: number;
  username: string;
  stage: stageData;
}

interface LeaderBoardProps {
  id: string;
  data: clearListItem[] | null;
  targetId: number;
}

const LeaderBoard = (props: LeaderBoardProps) => {
  const { id, data, targetId } = props;
  const game_id = id;
  const history = useHistory();
  const targetRef = useRef(null);

  useEffect(() => {
    if (data) {
      data.map((item) => {
        console.log('rank_data in board : ', data);
        console.log('targetId in board : ', targetId);
      });
    }
  }, [data, targetId]);

  useEffect(() => {
    if (targetRef.current) {
      console.log(targetRef.current);
    }
  }, [targetRef]);

  return (
    <Board title={`LEADERBOARD`} className={cn('container')}>
      <Link to="/games">
        <Button className={cn('btn__close')} shape="circle">
          X
        </Button>
      </Link>

      <table className={cn('rank__container')}>
        {data &&
          data.map((item, idx) => {
            return (
              <ScoreListItem
                type={
                  idx === 0
                    ? item.id === targetId
                      ? SocreListType.firstMy
                      : SocreListType.first
                    : item.id === targetId && SocreListType.my
                }
              >
                <th
                  style={{ width: '10%' }}
                  ref={item.id === targetId ? targetRef : null}
                >
                  {idx + 1}.
                </th>
                <td style={{ width: '30%' }}>{item.username}</td>
                <td style={{ width: '15%' }}>
                  {scoreTimeParser(item.clearTime)}
                </td>
                <td style={{ width: '30%' }}>
                  {scoreHeartParser(item.clearHeart, item.stage.heartCnt)}
                </td>
                <td style={{ width: '15%' }}>{item.score}</td>
              </ScoreListItem>
            );
          })}
      </table>

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
