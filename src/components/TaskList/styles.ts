import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
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
