/* eslint-disable no-alert */
import React, { useEffect, useMemo, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './GameScene.module.scss';
import cb from 'classnames/bind';
import Indicator from '../../../components/Indicator';
import Modal from '../../../components/Modal';
import Board from '../../../components/Board';
import Button from '../../../components/Button';
import LeaderBoard, { clearListItem } from './LeaderBoard';
import GameOver, { overData } from './GameOver';

import * as LibStore from '../../../lib/Storage';
import { game } from '../GameListScene';
import { getClearRanks, getGameDetail } from '../../../api/games';
import { number } from 'yargs';
import GameRule from './GameRule';

const cn = cb.bind(styles);

export interface GameIdMatchParams {
  game_id: string;
}

const GameScene = ({ match }: RouteComponentProps<GameIdMatchParams>) => {
  const { game_id } = match.params;

  // Modal
  const [visibility, setVisibility] = useState<boolean>(false);
  const [visibilityOver, setVisibilityOver] = useState<boolean>(false);
  const [visibilityRule, setVisibilityRule] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(true);

  // 게임 정보 GET
  const nickname = LibStore.get('NICKNAME');
  const [data, setData] = useState<game | null>(null);

  useEffect(() => {
    getGameDetail(game_id).then((response) => {
      if (typeof response.message === 'string') {
        alert(response.message);
        console.log(response);
      } else {
        setData(response);
        console.log(response);
      }
    });
  }, []);

  // Aframe Load 체크
  const aframeLoad = () => {
    setLoading(false);
  };

  const [rankData, setRankData] = useState<clearListItem[] | null>(null);

  const [targetRank, setTargetRank] = useState<number>(0);

  const [overData, setOverData] = useState<overData>({
    user_name: '',
    cur_obj: 0,
    cur_time: 0,
    cur_heart: 0,
    total_obj: 0,
    total_time: 0,
    total_heart: 0
  });

  // Iframe Callback Event 체크
  const callback = async (e: MessageEvent<any>) => {
    // 전달 된 데이터
    console.log(e.data.functionName);

    // Game Clear
    if (e.data.functionName === 'gameClear') {
      if (e.data.data) {
        setTargetRank(e.data.data.id);
        await getClearRanks(game_id).then((response) => {
          if (typeof response.message === 'string') {
            alert(response.message);
          } else {
            setRankData(response._embedded.clearGameList);
            console.log('rankData : ', response._embedded.clearGameList);
          }
        });
      }
      setVisibility(true);
    }

    // Game Over
    if (e.data.functionName === 'gameOver') {
      setOverData({
        user_name: e.data.user_name,
        cur_obj: e.data.cur_obj,
        cur_time: e.data.cur_time,
        cur_heart: e.data.cur_heart,
        total_obj: e.data.total_obj,
        total_time: e.data.total_time,
        total_heart: e.data.total_heart
      });
      setVisibilityOver(true);
    }
  };

  useEffect(() => {
    window.addEventListener('message', callback);
    return () => {
      window.removeEventListener('message', callback);
    };
  });

  useEffect(() => {
    console.log('rankData : ', rankData);
  }, [rankData]);

  return (
    <>
      {data && (
        <iframe
          src={`${data.aframeUrl}?gameId=${game_id}&user=${nickname}`}
          className={cn('ifram__container')}
          onLoad={aframeLoad}
          allowFullScreen
        />
      )}

      {loading ? (
        <Indicator className={cn('indicator--center')} />
      ) : (
        <Modal isVisible={visibilityRule}>
          <GameRule onClickCloseBtn={() => setVisibilityRule(false)} />
        </Modal>
      )}

      <Modal isVisible={visibility}>
        <LeaderBoard
          id={game_id}
          data={rankData && rankData}
          targetId={targetRank && targetRank}
        />
      </Modal>

      <Modal isVisible={visibilityOver}>
        <GameOver data={overData && overData} />
      </Modal>
    </>
  );
};

export default GameScene;
