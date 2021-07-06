export const scoreHeartParser = (remain: number, total: number) => {
  let heart = '';
  for (let i = 0; i < remain; i++) {
    heart += '❤️';
  }

  for (let i = 0; i < total - remain; i++) {
    heart += '🖤';
  }
  return heart;
};
