import React from 'react';
import styles from './GameListScene.module.scss';
import cb from 'classnames/bind';
import { Link } from 'react-router-dom';
import Board from '../../../components/Board';

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

const game_items = [
  { game_id: '1' },
  { game_id: '2' },
  { game_id: '3' },
  { game_id: '4' }
];

const GameListScene = () => {
  return (
    <Board title="STAGE LIST">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={cn('swiper__container')}
      >
        {game_items.map((item) => {
          return (
            <SwiperSlide>
              <Link
                to={`/game/${item.game_id}`}
                className={cn('swiper__item__wrapper')}
              >
                <div className={cn('swiper__item')}>Stage{item.game_id}</div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Board>
  );
};

export default GameListScene;
