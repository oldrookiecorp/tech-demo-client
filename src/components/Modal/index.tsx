import React from 'react';
import styles from './Modal.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

export interface ModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * 컨테이너 클래스 네임
   */
  containerClassName?: string;
  /**
   * 모달 여부
   */
  isVisible: boolean;
  /**
   * 백드롭 여부
   */
  isBackdrop?: boolean;
  /**
   * 백드롭 스타일
   */
  backdropClassName?: string;
  /**
   * 백드롭 클릭 이벤트
   */
  onClickBackdrop?: () => void;
  /**
   * ref
   */
  ref?: any;
}

/**
 *  모달 컴포넌트 props : ({ isVisible, onClickBackdrop, backdropClassName })
 */
const Modal = (props: ModalProps) => {
  const {
    className,
    containerClassName,
    isVisible = false,
    isBackdrop = true,
    backdropClassName,
    onClickBackdrop,
    ref,
    ...rest
  } = props;

  // Visible Class
  const visibleClassNames = cn([
    containerClassName && containerClassName,
    isVisible ? `container--visible` : `container--none`,
    isVisible && isBackdrop ? `container--fill` : `container--fit`
  ]);

  // Modal Container Class
  const classNames = cn(props.className, 'wrapper');

  return (
    <div className={visibleClassNames} ref={ref} {...rest}>
      {/* Modal Content  */}
      <div className={classNames}>{isVisible && props.children}</div>
      {/* BackDrop Layout */}
      {isBackdrop && (
        <div
          className={cn('backdrop', backdropClassName)}
          onClick={onClickBackdrop}
        ></div>
      )}
    </div>
  );
};

export default Modal;
