import React, { forwardRef } from 'react';
import cx from 'classnames';
import styles from './Loader.module.scss';

export interface LoaderProps {
  color?: 'primary' | 'white';
  className?: string;
}

export const Loader = forwardRef<SVGSVGElement, LoaderProps>(({
  color = false,
  className,
}, ref) => (
  <svg viewBox="25 25 50 50" className={className} ref={ref} aria-label="Loading">
    <g className={styles.circular}>
      <circle
        className={cx(styles.path, {
          [styles.primary]: color === 'primary',
          [styles.white]: color === 'white',
        })}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </g>
  </svg>
));

export default Loader;
