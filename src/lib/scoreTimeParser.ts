import moment from 'moment';

export const scoreTimeParser = (remainTime: number) => {
  const min = Math.floor(moment.duration(remainTime, 'seconds').asMinutes());
  const sec = moment.duration(remainTime, 'seconds').seconds();

  return `${min < 10 && '0'}${min} : ${sec < 10 && '0'}${sec}`;
};
