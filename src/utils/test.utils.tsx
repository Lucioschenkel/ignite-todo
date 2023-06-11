import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import { theme } from '../styles/theme';
import { TodoContextProvider } from '../contexts/TodoContext';

export function renderWithProviders(component: ReactNode) {
  render(
    <ThemeProvider theme={theme}>
      <TodoContextProvider>{component}</TodoContextProvider>
    </ThemeProvider>
  );
}
