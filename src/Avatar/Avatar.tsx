import React, { forwardRef, useCallback, useState } from 'react';
import cx from 'classnames';

import useClasses from '../useClasses/useClasses';
import styles from './Avatar.module.scss';
import ImageWrap from './ImageWrap';

export enum AvatarSize {
  /**
   * 주로 web 환경에서 프로필 혹은 개인 정보 화면 등 아바타가 강조되어야 하는 화면에 사용합니다.
   */
  lg,

  /** 기본 사이즈
   * 주로 mobile 환경에서 프로필 혹은 개인 정보 화면 등 아바타가 강조되어야 하는 화면에 사용합니다.
   */
  md,

  /**
   * 주로 댓글이나 목록 등 반복되는 모듈에 사용합니다.
   */
  sm,

  /**
   * 주로 협소한 레이아웃에 효율적인 공간활용이 필요할 때 사용합니다.
   */
  xs,
}

export interface IAvatarProps<T = HTMLAnchorElement | HTMLButtonElement> extends React.HTMLAttributes<T> {
  /** 필드 네임 */
  name?: string;

  /** classnames */
  className?: string;

  /** avatar size */
  size?: keyof typeof AvatarSize;

  /** hyperlink */
  href?: string;

  /** image url */
  imageUrl?: string;
}

export const Avatar = forwardRef<HTMLAnchorElement | HTMLButtonElement, IAvatarProps>(
  ({ name, className, size = AvatarSize.md, href, imageUrl, ...props }, ref) => {
    const [isVisible, setVisible] = useState(false);
    const classes = useClasses(
      () => [
        styles,
        {
          name: 'avatar',
          className,
        },
        size && {
          // Button Size
          [styles.lg]: AvatarSize[size] === AvatarSize.lg,
          [styles.md]: AvatarSize[size] === AvatarSize.md,
          [styles.sm]: AvatarSize[size] === AvatarSize.sm,
          [styles.xs]: AvatarSize[size] === AvatarSize.xs,
        },
      ],
      [styles, size],
    );

    const onVisible = useCallback<(visible: boolean) => void>(
      (visible) => {
        if (isVisible !== visible) {
          setVisible(visible);
        }
      },
      [isVisible],
    );

    // anchor
    if (href) {
      return (
        <a
          {...(props as React.HTMLAttributes<HTMLAnchorElement>)}
          className={classes}
          role="button"
          href={href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          ref={ref as React.MutableRefObject<HTMLAnchorElement>}
        >
          <ImageWrap imageUrl={imageUrl} className={cx({ [styles.visible]: isVisible })} onVisible={onVisible} />
        </a>
      );
    }

    return (
      <button
        {...(props as React.HTMLAttributes<HTMLButtonElement>)}
        className={classes}
        ref={ref as React.MutableRefObject<HTMLButtonElement>}
      >
        <ImageWrap imageUrl={imageUrl} className={cx({ [styles.visible]: isVisible })} onVisible={onVisible} />
      </button>
    );
  },
);

export default Avatar;
