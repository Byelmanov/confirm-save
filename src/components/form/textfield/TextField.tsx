import React from 'react';
import { TextFieldProps, TextField as MuiTextField } from '@mui/material';
import { Field, FieldProps } from 'formik';

import { combineSxProps } from 'utils/combineSxProps';

import { styles } from './styles';

type Props = TextFieldProps & {
  name: string;
};

export const TextField: React.FC<Props> = ({ name, sx, ...rest }) => {
  const sxStyles = combineSxProps([styles.root, sx]);

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        return (
          <MuiTextField
            fullWidth
            {...rest}
            {...field}
            sx={sxStyles}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
          />
        );
      }}
    </Field>
  );
};
