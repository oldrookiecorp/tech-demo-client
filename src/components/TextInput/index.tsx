import React from 'react';
import styles from './TextInput.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

export interface TextInputProps
  extends React.HtmlHTMLAttributes<HTMLDivElement | HTMLInputElement> {
  className?: string;
  placeholder?: string;
  value: string;
  autoFocus?: boolean;
  onChange?: (e: any) => void;
}

const TextInput = (props: TextInputProps) => {
  const { placeholder, value, className, autoFocus, onChange, ...rest } = props;

  return (
    <input
      className={cn('container', className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      {...rest}
    />
  );
};

export default TextInput;
