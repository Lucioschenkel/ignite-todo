import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 54px;
  border-radius: 8px;

  color: ${(props) => props.theme.colors['gray-100']};
  font-size: 1rem;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.colors['gray-500']};
  border: 2px solid ${(props) => props.theme.colors['gray-700']};
  box-sizing: content-box;

  outline: 0;

  &:focus {
    border-color: ${(props) => props.theme.colors['blue-dark']};
  }

  &::placeholder {
    font-size: 1rem;
    color: ${(props) => props.theme.colors['gray-300']};
  }
`;
