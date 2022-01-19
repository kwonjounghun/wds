import React from 'react';
import cx from 'classnames';

import styles from './Divider.module.scss';

export enum DividerType {
  /** 기본 형태
   * @default
   */
  horizontal,

  /**
  * 두꺼운 Border 사용으로 많은 양의 컨텐츠 그룹 분리
  */
  thick,

  /**
  * 콘텐츠 그룹을 세로로 분리
  */
  vertical,

  /**
  * 단일 텍스트 정보 나열시 선 요소로 정보를 시각적으로 분리
  */
 inline,

 /**
  * 단일 텍스트 정보 나열시 점 요소로 정보를 시각적으로 분리
  */
 dot,
}

export enum DividerColor {
  /** 기본 컬러
   * 배경 컬러가 밝을 때
   * @default
   */
  lightBG,

  /**
  * 배경 컬러가 어두울 때
  */
  darkBG,
}

export enum DividerElement {
  /** 기본 엘리먼트
   * 주제의 분리를 의미하는 hr
   * @default
   */
  hr,

  /**
  * 부모 엘리먼트가 ul일 때
  */
  li
}

export enum Spacing {
  /** 위,아래(horizontal, thick) 또는 좌,우측(vertical) 여백 설정(디자인 시스템 기준)
   * spacing-5
   * @default
   */
  spacing5,

  /** spacing-1 */
  spacing1,

  /** spacing-2 */
  spacing2,

  /** spacing-3 */
  spacing3,

  /** spacing-4 */
  spacing4,

  /** spacing-6 */
  spacing6,

  /** spacing-7 */
  spacing7,

  /** spacing-8 */
  spacing8,
  
  /** spacing-9 */
  spacing9,

  /** spacing-10 */
  spacing10,
}

export enum FontSize {
  /** 적용된 폰트 크기(디자인 시스템 기준)
   * caption-2
   * @default
   */
  caption2,

  /**
  * caption-1
  */
  caption1,

  /**
  * body-2
  */
  body2,

  /**
  * body-1  */
  body1,

 /**
  * title-6  */
  title6,

  /**
  * title-5  */
  title5,
}

export interface DividerProps {
  /** 타입 */
  type?: keyof typeof DividerType;

  /** 여백 */
  spacing?: keyof typeof Spacing;

  /** 컬러 */
  color?: keyof typeof DividerColor;

  /** 엘리먼트 타입. 
   * 기본적으로는 hr 엘리먼트이나, 부모가 ul일 때는 li로 변경
  */
  element?: keyof typeof DividerElement;

  /** 사용된 폰트 사이즈.
   * Inline, Dot 타입의 경우 사용된 주변 텍스트의 폰트 사이즈를 입력합니다.
   */
  fontSize?: keyof typeof FontSize;

  /** CSS 플렉스 아이템 적용 여부. 
   * vertical 타입에서 부모 컨테이너가 display: flex일 경우 사용합니다.
  */
  flexItem?: boolean;

  /** 클래스명 */
  className?: string;
}

const Divider = ({
  type = 'horizontal',
  color = 'lightBG',
  element = 'hr',
  spacing = 'spacing5',
  fontSize = 'caption2',
  flexItem = false,
  className,
  ...props
}: DividerProps) => {

  const classes = cx(
    // Default
    styles.divider,
    // Type
    type && {
      [styles.horizontal]: type === 'horizontal',
      [styles.thick]: type === 'thick',
      [styles.vertical]: type === 'vertical',
      [styles.inline]: type === 'inline',
      [styles.dot]: type === 'dot',
    },
    // Color
    color && {
      [styles.lightBG]: color === 'lightBG',
      [styles.darkBG]: color === 'darkBG',
    },
    // Spacing
    spacing && {
      [styles.spacing1]: spacing === 'spacing1',
      [styles.spacing2]: spacing === 'spacing2',
      [styles.spacing3]: spacing === 'spacing3',
      [styles.spacing4]: spacing === 'spacing4',
      [styles.spacing5]: spacing === 'spacing5',
      [styles.spacing6]: spacing === 'spacing6',
      [styles.spacing7]: spacing === 'spacing7',
      [styles.spacing8]: spacing === 'spacing8',
      [styles.spacing9]: spacing === 'spacing9',
      [styles.spacing10]: spacing === 'spacing10',
    },
    // Font Size
    fontSize && {
      [styles.caption2]: fontSize === 'caption2',
      [styles.caption1]: fontSize === 'caption1',
      [styles.body2]: fontSize === 'body2',
      [styles.body1]: fontSize === 'body1',
      [styles.title6]: fontSize === 'title6',
      [styles.title5]: fontSize === 'title5',
    },
    // CSS Flex Item
    {
      [styles.flexItem]: flexItem
    },
    className,
  )

  if (element === 'li') {
    return (
      <li
        {...props}
        role="separator"
        className={classes}
      />
    )
  }

  return (
    <hr
      {...props}
      className={classes}
    />
  )
};

export default Divider;