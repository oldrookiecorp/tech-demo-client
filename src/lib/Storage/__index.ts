import { USER_KEYS, API_KEYS } from './Storage.type';

/**
 * 스토리지에서 사용하는 모든 키
 */
export type StorageKey = keyof typeof USER_KEYS | keyof typeof API_KEYS;

export const get = (key: StorageKey): string | null =>
  localStorage.getItem(key);

export const set = (key: StorageKey, value: string): void =>
  localStorage.setItem(key, value);

export const remove = (key: StorageKey): void => {
  const _found = get(key);
  if (_found) {
    localStorage.removeItem(key);
  } else {
    throw new Error(`[STORAGE] '${key}'는 존재하지 않는 키 입니다.`);
  }
};

export const clear = () => localStorage.clear();
