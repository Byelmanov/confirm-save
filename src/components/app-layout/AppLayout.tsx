import React from 'react';
import { Box, Paper } from '@mui/material';

import { styles } from './styles';
import { Header } from 'components/header';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <Box sx={styles.container}>
      <Header />
      <Paper sx={styles.paper}>
        <Box component="main" sx={styles.content}>
          {children}
        </Box>
      </Paper>
    </Box>
  );
};
