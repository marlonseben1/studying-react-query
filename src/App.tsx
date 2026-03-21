import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Posts } from './pages/posts/posts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Posts />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
