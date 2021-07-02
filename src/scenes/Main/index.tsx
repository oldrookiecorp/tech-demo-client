import React, { useEffect } from 'react';
import styles from './MainScene.module.scss';
import cb from 'classnames/bind';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { useState } from 'react';

import * as LibStore from '../../lib/Storage';
import KakaoShareButton from '../../components/KakaoShareButton';

const cn = cb.bind(styles);

const MainScene = () => {
  const [nickname, setNickname] = useState<string>('');
  const [notice, setNotice] = useState<string>('');
  let history = useHistory();

  const fn = {
    clickPlay: () => {
      if (nickname.length > 0) {
        LibStore.set('NICKNAME', nickname);
        fn.redriect();
      } else {
        setNotice('닉네임을 입력해주세요.');
      }
    },
    handleKeyPress: (e: any) => {
      if (e.key === 'Enter') {
        fn.clickPlay();
      }
    },
    redriect: () => {
      history.push(`/games`);
    }
  };

  return (
    <div className={cn('container')}>
      <h1 className={cn('title')}>
        <span>VR</span>.GAME
      </h1>

      <div className={cn('notice')}>{notice}</div>

      <TextInput
        className={cn('textInput')}
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        autoFocus={true}
        onKeyPress={fn.handleKeyPress}
      />

      <div className={cn('btn--container')}>
        <Button className={cn('btn--play')} onClick={() => fn.clickPlay()}>
          PLAY
        </Button>
      </div>

      <KakaoShareButton />
    </div>
  );
};

export default MainScene;
