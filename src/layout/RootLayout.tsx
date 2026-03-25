import { Box } from '@mui/material';
import TemporaryDrawer from '../components/drawer/drawer';
import { Outlet } from 'react-router-dom';

export function RootLayout() {
  return (
    <>
      <TemporaryDrawer />
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
}
