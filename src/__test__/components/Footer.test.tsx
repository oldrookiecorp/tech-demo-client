import React from 'react';
import ReactDOM from 'react-dom';
import { default as Footer } from '../../components/Footer';
import { render } from '@testing-library/react';

describe('[Component] Footer', () => {
  it('스냅샷 테스트', () => {
    const rendered = render(<Footer />);
    expect(rendered.container).toMatchSnapshot();
  });
});
