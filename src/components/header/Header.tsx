import { Typography, Box } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styles } from './styles';

export const Header: React.FC = () => {
  return (
    <Box component="header" py={4} px={4} sx={styles.border}>
      <Typography variant="h1">
        <FormattedMessage id="header.title" />
      </Typography>
    </Box>
  );
};
