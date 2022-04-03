import React from 'react';
import { Button, ButtonProps } from '@mui/material';

import { combineSxProps } from 'utils/combineSxProps';
import { styles } from './styles';

export const SubmitButton: React.FC<ButtonProps> = ({ sx, ...props }) => {
  const sxStyles = combineSxProps([styles.root, sx]);
  return <Button sx={sxStyles} variant="contained" {...props}></Button>;
};
