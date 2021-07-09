import React from 'react';
import { default as Modal } from '../../components/Modal';
import { render, fireEvent, screen } from '@testing-library/react';
require('@testing-library/jest-dom/extend-expect');

describe('[Component] Modal', () => {
  it('스냅샷 테스트 : default', () => {
    const __MODAL_CLASS_NAME = 'MODAL_CLASS_NAME';
    const rendered = render(
      <Modal isVisible={true} className={__MODAL_CLASS_NAME}>
        <p>SNAPSHOT TEST</p>
      </Modal>
    );

    expect(rendered).toMatchSnapshot();
  });
  it('프로퍼티 테스트 : isVisible', async () => {
    const __MODAL_CONTAINER_CLASS_NAME = '__MODAL__CONTAINER_CLASSNAME';
    const __VISIBLE_CLASS = 'container--visible';
    const __INVISIBLE_CLASS = 'container--none';
    const rendered = render(
      <Modal containerClassName={__MODAL_CONTAINER_CLASS_NAME} isVisible={true}>
        <p>Hello</p>
      </Modal>
    );

    // 보이기 처리
    expect(
      rendered.container.querySelector(`.${__MODAL_CONTAINER_CLASS_NAME}`)
    ).toHaveClass(__VISIBLE_CLASS);

    rendered.rerender(
      <Modal
        containerClassName={__MODAL_CONTAINER_CLASS_NAME}
        isVisible={false}
      >
        <p>Hello</p>
      </Modal>
    );

    // 안 보이기 처리
    expect(
      rendered.container.querySelector(`.${__MODAL_CONTAINER_CLASS_NAME}`)
    ).toHaveClass(__INVISIBLE_CLASS);
  });
  describe('프로퍼티 테스트 : isBackdrop, backdropClassName, onClickBackdrop', () => {
    const __MODAL_CONTAINER_CLASS_NAME = '__MODAL__CONTAINER_CLASSNAME';
    const __MODAL_BACKDROP_CLASS_NAME = '__MODAL__BACKGDROP_CLASSNAME';
    const __VISIBLE_CLASS = 'container--visible';
    const __INVISIBLE_CLASS = 'container--none';
    const __handler = jest.fn();

    // 백드롭이 생성됨
    it('백드롭 생성', () => {
      const rendered = render(
        <Modal
          containerClassName={__MODAL_CONTAINER_CLASS_NAME}
          isVisible={true}
          isBackdrop={true}
          backdropClassName={__MODAL_BACKDROP_CLASS_NAME}
          onClickBackdrop={__handler}
        />
      );

      expect(
        rendered.container.querySelector(`.${__MODAL_BACKDROP_CLASS_NAME}`)
      ).toBeInTheDocument();
    });
    it('백드롭 false', () => {
      const rendered = render(
        <Modal
          containerClassName={__MODAL_CONTAINER_CLASS_NAME}
          isVisible={true}
          isBackdrop={false}
          backdropClassName={__MODAL_BACKDROP_CLASS_NAME}
          onClickBackdrop={__handler}
        />
      );

      expect(
        rendered.container.querySelector(`.${__MODAL_BACKDROP_CLASS_NAME}`)
      ).toBe(null);
    });
    it('클릭 후 숨김 처리', () => {
      // const rendered = render(
      //   <Modal
      //     containerClassName={__MODAL_CONTAINER_CLASS_NAME}
      //     isVisible={true}
      //     isBackdrop={true}
      //     backdropClassName={__MODAL_BACKDROP_CLASS_NAME}
      //     onClickBackdrop={__handler}
      //   />
      // );
      // rendered.debug();
      // const found = rendered.container.querySelector(
      //   `.${__MODAL_BACKDROP_CLASS_NAME}`
      // );
      // expect(found).not.toBe(null);
      // if (found) {
      //   fireEvent.click(found);
      //   rendered.debug();
      //   expect(__handler).toHaveBeenCalledTimes(1);
      //   rendered.debug();
      //   expect(
      //     rendered.getByText(__MODAL_CONTAINER_CLASS_NAME).classList
      //   ).toMatch(new RegExp(__INVISIBLE_CLASS));
      //   rendered.debug();
      // }
    });
  });
});
