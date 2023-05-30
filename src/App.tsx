import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals';
import { theme } from './styles/theme';
import { Home } from './pages/home';
import { TodoContextProvider } from './contexts/TodoContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoContextProvider>
        <Home />
      </TodoContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
