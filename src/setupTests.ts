// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import 'jest-localstorage-mock';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

module.exports = async () => {
  function storageMock() {
    let storage: any = {};

    return {
      setItem: function (key: string, value: string) {
        storage[key] = value || '';
      },
      getItem: function (key: string) {
        return key in storage ? storage[key] : null;
      },
      removeItem: function (key: string) {
        delete storage[key];
      },
      get length() {
        return Object.keys(storage).length;
      },
      key: function (i: number) {
        const keys = Object.keys(storage);
        return keys[i] || null;
      },
      clear: jest.fn()
    };
  }

  global.localStorage = storageMock();
};
