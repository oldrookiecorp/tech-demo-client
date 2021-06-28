import 'jest-localstorage-mock';
import * as libStorage from '../../lib/Storage/index';

describe('[Library] : Storage', () => {
  const MOCK_KEY: libStorage.StorageKey = 'NICKNAME';
  const MOCK_VALUE = 'TEST_NICK_NAME';

  it('값 저장하기', () => {
    libStorage.set(MOCK_KEY, MOCK_VALUE);
  });

  it('값 불러오기', () => {
    expect(libStorage.get(MOCK_KEY)).toEqual(MOCK_VALUE);
  });

  it('클리어', () => {
    libStorage.set(MOCK_KEY, MOCK_VALUE);
    libStorage.clear();
    expect(libStorage.get(MOCK_KEY)).toEqual(null);
  });
});
