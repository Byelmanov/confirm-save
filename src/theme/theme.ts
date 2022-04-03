import { createTheme } from '@mui/material';
import { themeColors } from './themeColors';

export const theme = createTheme({
  palette: {
    primary: { main: themeColors.blue },
  },
  typography: {
    h1: {
      fontSize: 25,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: themeColors.aquaHaze,
          boxShadow: 'none',
        },
      },
    },
  },
});
