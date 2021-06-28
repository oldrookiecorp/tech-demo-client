import React from 'react';
import ReactDOM from 'react-dom';
import { default as Board } from '../../components/Board';
import { render } from '@testing-library/react';

describe('[Component] Board', () => {
  const __TEST_BOARD_TITLE = '__test__';
  it('스냅샷 테스트', () => {
    const rendered = render(
      <Board title={__TEST_BOARD_TITLE}>
        <p>BOARD COMPONENT</p>
      </Board>
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it('프로퍼티 테스트 : title', () => {
    const { getByText } = render(<Board title={__TEST_BOARD_TITLE} />);
    getByText(__TEST_BOARD_TITLE);
  });

  it('프로퍼티 테스트 : children', () => {
    const CHILDREN_TEXT = `${__TEST_BOARD_TITLE}__BOARD_CHILDREN__${new Date().getTime()}`;
    const { getByText } = render(
      <Board>
        <p>{CHILDREN_TEXT}</p>
      </Board>
    );
    getByText(CHILDREN_TEXT);
  });
});
