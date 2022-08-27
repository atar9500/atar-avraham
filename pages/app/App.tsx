import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import theme from '~/shared/theme';

import Header from './Header';

type AppProps = {
  children: React.ReactNode;
};

const App = ({ children }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default App;
