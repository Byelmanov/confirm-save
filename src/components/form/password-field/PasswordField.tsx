import React, { useCallback, useState } from 'react';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { TextField } from 'components/form/textfield';

type Props = TextFieldProps & {
  name: string;
};

export const PasswordField: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
