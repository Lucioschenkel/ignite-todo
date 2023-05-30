import styled from 'styled-components';

export const StyledBadge = styled.span`
  padding: 0 0.5rem;
  border-radius: 999px;
  height: 19px;
  background-color: ${(props) => props.theme.colors['gray-400']};
  color: ${(props) => props.theme.colors['gray-100']};
`;
