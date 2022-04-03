import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from 'theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { IntlProvider } from 'react-intl';
import { localizationMap, defaultLanguage } from 'localization';
import { Routes } from 'routes';
import { AppLayout } from 'components/app-layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider
        messages={localizationMap[defaultLanguage]}
        locale={defaultLanguage}
        defaultLocale={defaultLanguage}
      >
        <ThemeProvider theme={theme}>
          <AppLayout>
            <Routes />
          </AppLayout>
        </ThemeProvider>
      </IntlProvider>
    </QueryClientProvider>
  );
}

export default App;
