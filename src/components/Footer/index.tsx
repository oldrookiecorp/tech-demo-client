import React from 'react';
import styles from './Footer.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

const Footer = () => {
  return <div className={cn('container')}>© 2021 A-Frame Demo Game</div>;
};

export default Footer;
