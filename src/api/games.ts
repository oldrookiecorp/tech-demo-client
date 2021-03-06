import axios from 'axios';

export const getGames = async () => {
  try {
    const response = await axios.get('https://syu-clubs.com/api/games');
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getGameDetail = async (id: any) => {
  try {
    const response = await axios.get(`https://syu-clubs.com/api/games/${id}`);
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getClearRanks = async (id: any) => {
  try {
    const response = await axios.get(
      `https://syu-clubs.com/api/clear-games?stage=${id}&size=99999`
    );
    return response.data;
  } catch (e) {
    return e;
  }
};
