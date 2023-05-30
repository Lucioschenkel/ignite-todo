import { ReactNode } from 'react';
import { StyledBadge } from './styles';

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return <StyledBadge>{children}</StyledBadge>;
}
