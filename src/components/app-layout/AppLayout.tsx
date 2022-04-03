import React from 'react';
import { Box } from '@mui/material';

import { styles } from './styles';

export const AppLayout: React.FC = ({ children }) => {
  return <Box sx={styles}>{children}</Box>;
};
