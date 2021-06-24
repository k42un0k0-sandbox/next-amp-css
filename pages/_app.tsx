import '../styles/globals.css';
import { CacheProvider } from '@emotion/react';
import { cache } from '../lib/emotion';

type Props = {
  Component: React.VFC;
  pageProps: Record<string, unknown>;
};


function MyApp({ Component, pageProps }: Props): JSX.Element {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
