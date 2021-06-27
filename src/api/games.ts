import axios from 'axios';

export const getGames = async () => {
  try {
    const response = await axios.get('http://210.114.17.157:8080/api/games');
    return response.data;
  } catch (e) {
    return e;
  }
};

export const getGameDetail = async (id: any) => {
  try {
    const response = await axios.get(
      `http://210.114.17.157:8080/api/games/${id}`
    );
    return response.data;
  } catch (e) {
    return e;
  }
};
