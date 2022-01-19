import React, { useMemo, forwardRef } from 'react';
import cx from 'classnames';

import Loader from '../Loader/Loader';
import useClasses from '../useClasses/useClasses';
import styles from './Button.module.scss';

/**
 * 버튼 종류
 */
export enum ButtonType {
  /**
   * 가장 일반적으로 쓰이는 버튼
   * @default
   */
  button,

  /**
   * Form에서 정보를 전송할 때 사용
   */
  submit,
}

export enum ButtonVariant {
  /**
   * Border만으로 외곽선이 정해져 있는 형태의 버튼
   * @default
   */
  outlined,

  /**
   * Border가 없고 색상으로만 채워진 형태의 버튼
   */
  contained,

  /**
   * 텍스트만 노출
   */
  text,
}

export enum ButtonSize {
  /**
   * extra small
   */
  xs,

  /**
   * small
   */
  sm,

  /**
   * medium
   * @default
   */
  md,

  /**
   * large
   */
  lg,

  /**
   * extra large
   */
  xl,

}

export enum ButtonColor {
  /** Brand Color */
  primary,

  /** Secondary Color */
  secondary,

  /** TertiaryMint */
  'tertiaryMint',

  /** TertiaryGrey */
  'tertiaryGrey',

  /** System Color - Info */
  info,

  /** System Color - Danger */
  danger,
}

export interface ButtonProps<T = HTMLButtonElement | HTMLAnchorElement> extends React.HTMLAttributes<T> {
  /** 버튼 종류 */
  type?: keyof typeof ButtonType;

  /** 버튼 종류 */
  variant?: keyof typeof ButtonVariant;

  /** 버튼 색상 */
  color?: keyof typeof ButtonColor;

  /** 버튼 크기 */
  size?: keyof typeof ButtonSize;

  /** Round Type */
  circular?: boolean;

  /** Loading */
  loading?: boolean;

  /** 버튼 텍스트 왼쪽에 나타낼 아이콘 */
  startIcon?: React.ReactNode;

  /** 버튼 텍스트 오른에 나타낼 아이콘 */
  endIcon?: React.ReactNode;

  /** 버튼 라벨 */
  children?: string | React.ReactNode;

  /**
   * `href`이 입력되면 컴포넌트는 `<a>`태그로 변경됩니다.
   */
  href?: string;

  fullWidth?: boolean;

  disabled?: boolean;
}

const iconComponent = (component: React.ReactNode | undefined) => {
  if (!React.isValidElement(component)) {
    return null;
  }
  const { className } = component.props;
  return React.cloneElement(component, { className: cx(styles.icon, className) });
};

const isIconOnly = (className: string | undefined): boolean => {
  if (className) {
    return className.includes('iconButton');
  }
  return false;
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
  type = 'button',
  variant,
  color,
  size = 'medium',
  circular = false,
  loading = false,
  startIcon,
  endIcon,
  className,
  children = null,
  href,
  fullWidth = false,
  disabled = false,
  ...props
}, ref) => {
  const startIconComp = iconComponent(startIcon);
  const endIconComp = iconComponent(endIcon);
  const iconOnly = isIconOnly(className);

  const content = useMemo(
    () => (
      <>
        <span>
          {startIconComp}
          <span className={styles.children}>{children}</span>
          {endIconComp}
        </span>
        {loading && (
          <div className={styles.loader}>
            <Loader
              className={styles.svg}
              color={(
                (variant && ButtonVariant[variant] === ButtonVariant.contained)
                && (color && ButtonColor[color] !== ButtonColor['tertiaryMint'])
              ) ? 'white' : 'primary'}
            />
          </div>
        )}
      </>
    ),
    [children, startIconComp, endIconComp, loading, color, variant],
  );

  const classes = useClasses(
    () => [
      styles,
      {
        name: 'button',
        className,
      },
      color && {
        // Color
        [styles.primary]: ButtonColor[color] === ButtonColor.primary,
        [styles.secondary]: ButtonColor[color] === ButtonColor.secondary,
        [styles['tertiaryMint']]: ButtonColor[color] === ButtonColor['tertiaryMint'],
        [styles['tertiaryGrey']]: ButtonColor[color] === ButtonColor['tertiaryGrey'],
        [styles.info]: ButtonColor[color] === ButtonColor.info,
        [styles.danger]: ButtonColor[color] === ButtonColor.danger,
      },
      variant && {
        // Variant
        [styles.contained]: ButtonVariant[variant] === ButtonVariant.contained,
        [styles.text]: ButtonVariant[variant] === ButtonVariant.text,
      },
      size && {
        // Button Size
        [styles.xs]: ButtonSize[size] === ButtonSize.xs,
        [styles.sm]: ButtonSize[size] === ButtonSize.sm,
        [styles.md]: ButtonSize[size] === ButtonSize.md,
        [styles.lg]: ButtonSize[size] === ButtonSize.lg,
        [styles.xl]: ButtonSize[size] === ButtonSize.xl,
      },
      {
        // Start Icon
        [styles.startIcon]: !!startIconComp,

        // End Icon
        [styles.endIcon]: !!endIconComp,

        // Icon Only
        [styles.iconOnly]: iconOnly,

        // Round Type
        [styles.circular]: !!circular,

        // Full Width
        [styles.block]: !!fullWidth,

        // Disabled
        [styles.disabled]: !!disabled,

        // Loading
        [styles.loading]: !!loading,
      },
    ],
    [
      styles,
      color,
      className,
      disabled,
      circular,
      loading,
      size,
      variant,
      fullWidth,
      iconOnly,
      startIconComp,
      endIconComp,
    ],
  );

  // Anchor
  if (href) {
    return (
      <a
        {...props as React.HTMLAttributes<HTMLAnchorElement>}
        href={href}
        className={classes}
        ref={ref as React.MutableRefObject<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  // Button
  return (
    <button
      {...props as React.HTMLAttributes<HTMLButtonElement>}
      className={classes}
      type={type}
      disabled={disabled}
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
    >
      {content}
    </button>
  );
});

export default Button;
