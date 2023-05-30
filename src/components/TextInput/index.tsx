import { ComponentProps, ElementRef, forwardRef } from 'react';

import { StyledInput } from './styles';

export type TextInputProps = ComponentProps<typeof StyledInput>;

export const TextInput = forwardRef<
  ElementRef<typeof StyledInput>,
  TextInputProps
>((props: TextInputProps, ref) => {
  return <StyledInput ref={ref} {...props} />;
});
