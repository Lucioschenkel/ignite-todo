import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors['gray-700']};
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
