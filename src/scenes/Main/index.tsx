import React from 'react';
import styles from './MainScene.module.scss';
import cb from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const cn = cb.bind(styles);

const MainScene = () => {
  return (
    <div className={cn('container')}>
      <h1 className={cn('title')}>XR 틀린그림 찾기!</h1>
      <Link to="/games">
        <Button className={cn('btn--play')}>PLAY</Button>
      </Link>
    </div>
  );
};

export default MainScene;
