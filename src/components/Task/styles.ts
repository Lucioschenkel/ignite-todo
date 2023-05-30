import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';

export const TaskContainer = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors['gray-500']};
  border-radius: 8px;
  padding: 0 1rem;

  label {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['gray-100']};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const CheckboxContainer = styled(Checkbox.Root)`
  border: 2px solid ${(props) => props.theme.colors.blue};
  border-radius: 999px;
  height: 17.45px;
  width: 17.45px;
  background: transparent;

  &[data-state='checked'] {
    background-color: ${(props) => props.theme.colors['purple-dark']};
  }

  &:focus,
  &[data-state='checked'] {
    border: 2px solid ${(props) => props.theme.colors['purple-dark']};
  }

  &[data-state='checked'] + label {
    text-decoration: line-through;
    transition: all ease-in-out 0.2s;
    color: ${(props) => props.theme.colors['gray-300']};
  }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme.colors['gray-100']};
  height: 0.875rem;
  width: 0.875rem;

  &[data-state='checked'] {
    animation: slideIn 200ms ease-out;
  }

  &[data-state='unchecked'] {
    animation: slideOut 200ms ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }

    to {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
`;

export const DeleteButton = styled.button`
  border: none;
  height: 32px;
  width: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;

  svg {
    color: ${(props) => props.theme.colors['gray-300']};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['gray-400']};

    svg {
      color: ${(props) => props.theme.colors.danger};
    }
  }
`;
