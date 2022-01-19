import { useMemo } from 'react';
import cx from 'classnames';
import {
  WaffleColorType,
  WaffleInputStatus,
  WaffleElementSize,
} from '../types';

type Styles = {
  readonly [className: string]: string;
}

type ClassNameOptions = {
  name: string;
  disabled?: boolean;
  className?: string;
  color?: keyof typeof WaffleColorType;
  size?: keyof typeof WaffleElementSize;
  status?: keyof typeof WaffleInputStatus;
}

export default function useClasses(
  factory,
  deps: React.DependencyList,
): string {
  const classes: [ Styles, ClassNameOptions ] = useMemo(factory, deps);
  const [
    styles,
    {
      name,
      color,
      size,
      status,
      disabled,
      className,
    },
    ...rest
  ] = classes;
  return useMemo(
    () => cx(
      styles[name],
      color && {
        // Color
        [styles.primary]: WaffleColorType[color] === WaffleColorType.primary,
        [styles.info]: WaffleColorType[color] === WaffleColorType.info,
        [styles.danger]: WaffleColorType[color] === WaffleColorType.danger,
      },
      size && {
        [styles.small]: WaffleElementSize[size] === WaffleElementSize.small,
        [styles.medium]: WaffleElementSize[size] === WaffleElementSize.medium,
        [styles.large]: WaffleElementSize[size] === WaffleElementSize.large,
      },
      status && {
        [styles.success]: WaffleInputStatus[status] === WaffleInputStatus.success,
        [styles.error]: WaffleInputStatus[status] === WaffleInputStatus.error,
      },
      {
        [styles.disabled]: !!disabled,
      },
      ...rest,
      className,
    ),
    deps,
  );
}
