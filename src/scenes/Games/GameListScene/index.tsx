/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import styles from './GameListScene.module.scss';
import cb from 'classnames/bind';
import { Link } from 'react-router-dom';
import Board from '../../../components/Board';
import Indicator from '../../../components/Indicator';
import { getGames } from '../../../api/games';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const cn = cb.bind(styles);

export interface game {
  id: string;
  aframeUrl: string;
  thumbUrl: string;
}
interface gameList {
  _embedded: {
    gameList: [game];
  };
}

const GameListScene = () => {
  const [data, setData] = useState<gameList | null>(null);

  useEffect(() => {
    getGames().then((response) => {
      if (typeof response.message === 'string') {
        alert(response.message);
        console.log(response);
      } else {
        setData(response);
        console.log(response);
      }
    });
  }, []);

  return (
    <Board title="STAGE LIST">
      {data ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          className={cn('swiper__container')}
        >
          {data._embedded.gameList.map((item, idx) => {
            return (
              <SwiperSlide key={item.id}>
                <Link
                  to={`/game/${item.id}`}
                  className={cn('swiper__item__wrapper')}
                >
                  <div
                    className={cn('swiper__item')}
                    style={{
                      backgroundImage: `url('${item.thumbUrl})`
                    }}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className={cn('indicator__container')}>
          <Indicator />
        </div>
      )}
    </Board>
  );
};

export default GameListScene;
