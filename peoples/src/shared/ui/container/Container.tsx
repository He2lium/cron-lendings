import cn from 'classnames';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: FC<Props> = ({ children, className }) => (
  <div className={cn('container', className)}>{children}</div>
);
