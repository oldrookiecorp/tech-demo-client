const BEARER_TOKEN_KEY = 'API_SERVER_BEARER_TOKEN';

/**
 * @description 유저 닉네임을 가져옵니다.
 */
 export const get = () => {
  const token = localStorage.getItem(BEARER_TOKEN_KEY);
  return token;
};

/**
 * @description 유저 닉네임을 설정합니다
 * @param nickname 저장될 닉네임 입니다. 공백일 수 없습니다. 삭제 시 clear 함수를 사용합니다
 */
export const set = (nickname: string) => {
  if (nickname.length <= 0) {
    throw new Error('[Lib][nkickname] 닉네임은 공백일 수 없습니다');
  } else {
    localStorage.setItem(BEARER_TOKEN_KEY, nickname);
  }
};

/**
 * @description 저장된 닉테임 정보를 삭제합니다
 */
export const clear = () => {
  localStorage.clear();
};