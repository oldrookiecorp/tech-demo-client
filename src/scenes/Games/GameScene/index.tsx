import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './GameScene.module.scss';
import cb from 'classnames/bind';
import Indicator from '../../../components/Indicator';
import Modal from '../../../components/Modal';
import LeaderBoard from './LeaderBoard';

import * as LibStore from '../../../lib/Storage';
import { game } from '../GameListScene';
import { getGameDetail } from '../../../api/games';

const cn = cb.bind(styles);

export interface GameIdMatchParams {
  game_id: string;
}

const GameScene = ({ match }: RouteComponentProps<GameIdMatchParams>) => {
  const { game_id } = match.params;

  const [loading, setLoading] = useState<boolean>(true);

  // 게임 정보 GET
  const nickname = LibStore.get();
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

  // Iframe Callback Event 체크
  const callback = (e: MessageEvent<any>) => {
    // 전달 된 데이터
    console.log(e.data.functionName);

    // 부모창의 함수 실행
    if (e.data.functionName === 'gameClear') {
      setVisibility(true);
      if (e.data.userIdx) {
        alert(e.data.userIdx);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('message', callback);
    return () => {
      window.removeEventListener('message', callback);
    };
  });

  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <>
      {data && (
        <iframe
          src={`${data.aframeUrl}?user=${nickname}`}
          className={cn('ifram__container')}
          onLoad={aframeLoad}
        />
      )}

      {/* <iframe
        src={`https://0.0.0.0:8888/Normal?user=${nickname}`}
        className={cn('ifram__container')}
        onLoad={aframeLoad}
      /> */}
      {loading && <Indicator />}

      <Modal isVisible={visibility}>
        <LeaderBoard id={game_id} />
      </Modal>
    </>
  );
};

export default GameScene;
