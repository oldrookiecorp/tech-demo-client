import React from 'react';
import ReactDOM from 'react-dom';
import { default as Indicator } from '../../components/Indicator';
import { render } from '@testing-library/react';

describe('[Component] Indicator', () => {
  it('스냅샷 테스트', () => {
    const rendered = render(<Indicator />);
    expect(rendered.container).toMatchSnapshot();
  });
});
