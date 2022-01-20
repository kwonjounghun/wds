import React, { forwardRef } from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

export interface InputProps<T = HTMLInputElement> extends Omit<React.InputHTMLAttributes<T>, 'size' | 'status'> {
  /** Input Type */
  type?: 'text' | 'number' | 'email' | 'password' | 'tel';

  /** Input 크기 */
  size?: 'sm' | 'md' | 'lg';

  /** Input 상태 */
  status?: 'error';
  
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function ({
  type = 'text',
  size = 'md',
  status,
  className,
  ...props
}, ref) {
  const classes = cx(
    styles.input,
    size && {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.lg]: size === 'lg',
    },
    {
      [styles.error]: status === 'error',
    },
    className
  );
  return (
    <input
      {...props}
      type={type}
      className={classes}
      ref={ref}
      aria-invalid={status === 'error' ? "true" : "false"}
    />
  );
});

export default Input;
