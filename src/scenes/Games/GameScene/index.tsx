import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './GameScene.module.scss';
import cb from 'classnames/bind';
import Modal from '../../../components/Modal';
import Board from '../../../components/Board';
import Button from '../../../components/Button';

const cn = cb.bind(styles);

export interface GameIdMatchParams {
  game_id: string;
}

const GameScene = ({ match }: RouteComponentProps<GameIdMatchParams>) => {
  const { game_id } = match.params;

  const [visibility, setVisibility] = useState<boolean>(true);

  return (
    <>
      <iframe
        src="https://aframe.io/examples/showcase/anime-UI/"
        className={cn('ifram__container')}
      />
      <Modal isVisible={visibility}>
        <Board title="GAMEOVER">
          <Button
            className={cn('btn--close')}
            shape="circle"
            onClick={() => setVisibility(false)}
          >
            X
          </Button>
          <input></input>
        </Board>
      </Modal>
    </>
  );
};

export default GameScene;
