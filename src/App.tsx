import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import TemporaryDrawer from './components/drawer/drawer';
import { People } from './pages/starwars/people/people';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Posts } from './pages/posts/posts';
import { Home } from './pages/home/home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TemporaryDrawer />
          <Box sx={{ p: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/json-placeholder" element={<Posts />} />
              <Route path="/star-wars" element={<People />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
