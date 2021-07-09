import React from 'react';
import styles from './Footer.module.scss';
import cb from 'classnames/bind';
import useScript from '../../hook/useScript';

const cn = cb.bind(styles);

const Footer = () => {
  // useScript('https://developers.kakao.com/sdk/js/kakao.js');
  return <div className={cn('container')}>© 2021 A-Frame Demo Game</div>;
};

export default Footer;
