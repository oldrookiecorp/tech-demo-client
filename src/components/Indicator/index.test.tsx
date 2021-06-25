import React from 'react';
import ReactDOM from 'react-dom';
import { default as Indicator } from '.';

it('정상적으로 랜더링', () => {
  const dom = document.createElement('div');
  ReactDOM.render(<Indicator />, dom);
});
