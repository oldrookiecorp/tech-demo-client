/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import styles from './LeaderBoard.module.scss';
import cb from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import Board, { IScrollTarget } from '../../../../components/Board';
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
  const targetRef = useRef<any>();

  const [targetInfo, setTargetInfo] = useState<IScrollTarget>();

  useEffect(() => {
    if (targetRef.current) {
      setTargetInfo({
        top: targetRef.current.offsetTop,
        height: targetRef.current.offsetHeight
      });
    }
  }, [targetRef]);

  return (
    <Board
      title={`LEADERBOARD`}
      className={cn('container')}
      scrollTarget={targetInfo && targetInfo}
    >
      <Link to="/games">
        <Button className={cn('btn__close')} shape="circle">
          X
        </Button>
      </Link>

      <table className={cn('rank__container')}>
        {data &&
          data.map((item, idx) => {
            return (
              <div ref={item.id === targetId ? targetRef : null}>
                <ScoreListItem
                  type={
                    idx === 0
                      ? item.id === targetId
                        ? SocreListType.firstMy
                        : SocreListType.first
                      : item.id === targetId && SocreListType.my
                  }
                >
                  <th style={{ width: '10%' }}>{idx + 1}.</th>
                  <td style={{ width: '30%' }}>{item.username}</td>
                  <td style={{ width: '15%' }}>
                    {scoreTimeParser(item.clearTime)}
                  </td>
                  <td style={{ width: '30%' }}>
                    {scoreHeartParser(item.clearHeart, item.stage.heartCnt)}
                  </td>
                  <td style={{ width: '15%' }}>{item.score}</td>
                </ScoreListItem>
              </div>
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
