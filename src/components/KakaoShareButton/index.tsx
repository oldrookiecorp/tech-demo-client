import React, { useEffect } from 'react';
import styles from './KakaoShareButton.module.scss';
import cb from 'classnames/bind';
import kakaoIcon from './assets/kakao.png';

const cn = cb.bind(styles);

interface KakaoShareButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const KakaoShareButton = (props: KakaoShareButtonProps) => {
  const { children, className, onClick } = props;

  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Link.createCustomButton({
        container: '#kakao-link-btn',
        templateId: 56200
      });
    }
  };

  return (
    <div className={cn('container')}>
      {/* Kakao share button */}
      <button id="kakao-link-btn" className={cn('btn')}>
        <img className={cn('icon')} src={kakaoIcon} alt="kakao-share-icon" />
      </button>
    </div>
  );
};

export default KakaoShareButton;
