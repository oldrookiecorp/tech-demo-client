/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './GameScene.module.scss';
import cb from 'classnames/bind';
import Indicator from '../../../components/Indicator';
import Modal from '../../../components/Modal';
import LeaderBoard from './LeaderBoard';
import GameOver, { overData } from './GameOver';

import * as LibStore from '../../../lib/Storage';
import { game } from '../GameListScene';
import { getGameDetail } from '../../../api/games';

const cn = cb.bind(styles);

export interface GameIdMatchParams {
  game_id: string;
}

const GameScene = ({ match }: RouteComponentProps<GameIdMatchParams>) => {
  const { game_id } = match.params;

  // Modal
  const [visibility, setVisibility] = useState<boolean>(false);
  const [visibilityOver, setVisibilityOver] = useState<boolean>(false);

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

  let overData: overData = {
    user_name: '',
    cur_time: '',
    cur_heart: ''
  };

  // Iframe Callback Event 체크
  const callback = (e: MessageEvent<any>) => {
    // 전달 된 데이터
    console.log(e.data.functionName);

    // Game Clear
    if (e.data.functionName === 'gameClear') {
      setVisibility(true);
      if (e.data.userIdx) {
        window.alert(e.data.userIdx);
      }
    }

    // Game Over
    if (e.data.functionName === 'gameOver') {
      e.data.cur_heart;
      overData.user_name = e.data.user_name;
      overData.cur_time = e.data.cur_time;
      overData.cur_heart = e.data.cur_heart;

      console.log(
        'overData : ',
        e.data.user_name,
        e.data.cur_time,
        e.data.cur_heart
      );

      setVisibilityOver(true);
    }
  };

  useEffect(() => {
    window.addEventListener('message', callback);
    return () => {
      window.removeEventListener('message', callback);
    };
  });

  return (
    <>
      {data && (
        <iframe
          // src={`${data.aframeUrl}?gameId=${game_id}&user=${nickname}`}
          src={`https://0.0.0.0:8888/normal?gameId=${game_id}&user=${nickname}`}
          className={cn('ifram__container')}
          onLoad={aframeLoad}
          allowFullScreen
        />
      )}

      {loading && <Indicator className={cn('indicator--center')} />}

      <Modal isVisible={visibility}>
        <LeaderBoard id={game_id} />
      </Modal>

      <Modal isVisible={visibilityOver}>
        <GameOver data={overData && overData} />
      </Modal>
    </>
  );
};

export default GameScene;
