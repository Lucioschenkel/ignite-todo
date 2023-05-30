import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  line-height: 0;
  gap: 0.5rem;

  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors['gray-100']};

  background: ${(props) => props.theme.colors['blue-dark']};
  border: none;

  height: 54px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.2s ease-in-out;
  }
`;
