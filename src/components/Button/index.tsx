import { IconProps } from 'phosphor-react';
import { ComponentProps } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  children: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export function Button({ children, icon: Icon, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {children}
      {Icon && <Icon weight="bold" size={20} />}
    </ButtonContainer>
  );
}
