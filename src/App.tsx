import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Posts } from './pages/posts/posts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import TemporaryDrawer from './components/drawer/drawer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TemporaryDrawer />
        <Posts />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
