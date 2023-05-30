import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HomeContainer = styled.main`
  width: 100%;
`;

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
`;

export const TaskForm = styled.form`
  margin-top: -27px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  & input {
    flex: 1;
  }
`;

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 54px;
`;

export const TaskListHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

interface HeaderTextProps {
  variant: 'primary' | 'secondary';
}

const headerVariantToColor = {
  primary: theme.colors.blue,
  secondary: theme.colors.purple,
} as const;

export const HeaderText = styled('h2')<HeaderTextProps>`
  color: ${(props) => headerVariantToColor[props.variant]};
  font-size: 0.875rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const EmptyTaskList = styled.div`
  width: 100%;
  border-radius: 8px;
  height: 244px;

  border-top: 2px solid ${(props) => props.theme.colors['gray-400']};
  margin-top: 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 1rem;
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;
