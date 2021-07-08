/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styles from './GameRule.module.scss';
import cb from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import Board from '../../../../components/Board';
import Button from '../../../../components/Button';
import ScoreListItem, { SocreListType } from '../LeaderBoard/ScoreListItem';
import { scoreHeartParser } from '../../../../lib/scoreHeartParser';
import { scoreTimeParser } from '../../../../lib/scoreTimeParser';

const cn = cb.bind(styles);
interface GameRuleProps {
  onClickCloseBtn: () => void;
}

const GameRule = (props: GameRuleProps) => {
  const { onClickCloseBtn } = props;

  return (
    <Board title={`Game Rules`} className={cn('container')}>
      <Button
        className={cn('btn__close')}
        shape="circle"
        onClick={onClickCloseBtn}
      >
        X
      </Button>
      <div className={cn('description__container')}>
        <h2>How to play game?</h2>
        <ul>
          <li>본 게임은 VR환경에 최적화 되어 있습니다.</li>
          <li>
            오른쪽 아래 <strong>VR버튼</strong>을 누르면 VR 모드로 게임을 즐길
            수 있습니다.
          </li>
        </ul>
        <h2>Goal</h2>
        <ul>
          <li>두 방을 비교하며 모든 틀린 사물을 찾아야 합니다.</li>
        </ul>
        <h2>Rules</h2>
        <ul>
          <li>중앙의 NPC를 클릭하면 게임이 시작됩니다.</li>
          <li>시간 내에 모든 사물을 찾으면 게임이 클리어 됩니다.</li>
          <li>시간 내에 모든 사물을 찾지 못하면 게임이 끝납니다.</li>
          <li>목숨을 전부 소진하면 게임이 끝납니다.</li>
        </ul>
      </div>
    </Board>
  );
};

export default GameRule;
