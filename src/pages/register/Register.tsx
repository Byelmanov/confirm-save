import React, { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';

import { RegisterFormData } from 'api/types';
import { TextField } from 'components/form/textfield';

import { styles } from './styles';
import { validation } from './validation';
import { fields } from './fields';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/button';
import { ButtonTypes } from 'components/button/constants';
import { PasswordField } from 'components/form/password-field';

export const Register: React.FC = () => {
  const handleSubmit = useCallback((values: RegisterFormData) => {
    console.log(values);
  }, []);

  const initialValues: RegisterFormData = { email: '', password: '' };

  return (
    <Box sx={styles.root} p={3}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validation}>
        {({ isSubmitting }) => {
          return (
            <Form>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <FormattedMessage id="register.email.label" />
              </Typography>
              <TextField name={fields.email} />
              <Typography variant="body1" sx={{ mb: 1, mt: 2 }}>
                <FormattedMessage id="register.password.label" />
              </Typography>
              <PasswordField name={fields.password} />
              <Button
                buttonType={ButtonTypes.submit}
                sx={{ mt: 3 }}
                disabled={isSubmitting}
                type="submit"
              >
                <FormattedMessage id="submit" />
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
