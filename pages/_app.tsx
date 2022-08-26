import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';

import theme from '~/shared/theme';

export type PageProps = {
  children: React.ReactNode;
};

const RootPage = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default RootPage;
