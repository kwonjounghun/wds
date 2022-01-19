export enum WaffleInputStatus {
  /** Success */
  success,

  /** Error */
  error,

  /**
   * Input Loading
   * @description 개별적으로 로더가 필요한 경우 사용
   */
  loading
}

export enum WaffleElementSize {
  /** Small Size */
  small,

  /** Medium Size */
  medium,

  /** Large Size */
  large,
}

export enum WaffleColorType {
  /** Brand Color */
  primary,

  /** System Color - Info */
  info,

  /** System Color - Danger */
  danger,
}

export enum WaffleIconPosition {
  left,
  right,
}

export enum WaffleVariant {
  /**
   * Border만으로 외곽선이 정해져 있는 형태의 버튼
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
