import { createTheme } from '@mui/material';
import { colorPalette } from './colorPalette';

export const theme = createTheme({
  palette: {
    background: {
      default: colorPalette.neutral[50],
    },
    text: {
      primary: colorPalette.neutral[900],
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
    allVariants: {
      color: colorPalette.neutral[900],
    },
  },
});
