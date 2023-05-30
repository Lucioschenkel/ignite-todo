import styled from 'styled-components';

type TypographyWeight = 'bold' | 'regular' | 'medium';

type TypographyProps = {
  weight?: TypographyWeight;
};

export const StyledText = styled.p<TypographyProps>`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-size: 1rem;

  font-weight: ${({ weight = 'regular' }) => weight};
  color: ${(props) => props.theme.colors['gray-300']};
`;
