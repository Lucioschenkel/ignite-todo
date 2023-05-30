import { ComponentProps, ReactNode } from 'react';
import { StyledText } from './styles';

interface TypographyProps extends ComponentProps<typeof StyledText> {
  children: ReactNode;
}

export function Typography({ children, ...props }: TypographyProps) {
  return <StyledText {...props}>{children}</StyledText>;
}
