import React from 'react';
import ReactDOM from 'react-dom';
import { default as Button } from '../../components/Button';
import { render } from '@testing-library/react';

describe('[Component] Button', () => {
  it('스냅샷 테스트 : default', () => {
    const rendered = render(<Button />);
    expect(rendered.container).toMatchSnapshot();
  });
  it('프로퍼티 테스트 : children', () => {
    const __BTN_LABEL_TEXT__ = 'button__' + new Date().getTime();
    const { getByText } = render(
      <Button>
        <p>{__BTN_LABEL_TEXT__}</p>
      </Button>
    );
    getByText(__BTN_LABEL_TEXT__);
  });
});
