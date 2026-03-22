import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import TemporaryDrawer from './components/drawer/drawer';
import { People } from './pages/starwars/people/people';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TemporaryDrawer />
        {/* <Posts /> */}
        <People />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
