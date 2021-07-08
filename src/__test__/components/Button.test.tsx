import React from 'react';
import ReactDOM from 'react-dom';
import { default as Button } from '../../components/Button';
import { render, fireEvent } from '@testing-library/react';

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
  it('프로퍼티 테스트 : className', () => {
    const __BTN_CLASS_NAME = 'BTN_CLASS_NAME';
    const rendered = render(<Button className={__BTN_CLASS_NAME} />);
    expect(rendered.container).toMatchSnapshot();
  });
  it('프로퍼티 테스트 : onClick 이벤트', () => {
    const handleClickEvent = jest.fn();
    const __BTN_LABEL_TEXT__ = `BTN_LABEL_TEXT__${new Date().getTime()}`;
    const rendered = render(
      <Button onClick={handleClickEvent}>{__BTN_LABEL_TEXT__}</Button>
    );
    fireEvent.click(rendered.getByText(__BTN_LABEL_TEXT__));
    expect(handleClickEvent).toHaveBeenCalledTimes(1);
  });
});
