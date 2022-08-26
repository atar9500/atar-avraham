import type { AppProps } from 'next/app';

import { App } from './app';
import '~/shared/i18n/init';

export type PageProps = {
  children: React.ReactNode;
};

const Page = ({ Component, pageProps }: AppProps) => {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
};

export default Page;
