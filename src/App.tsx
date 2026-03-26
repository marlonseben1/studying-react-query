import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import GlobalLoader from './components/globalLoader/globalLoader';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <GlobalLoader />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
