import '../styles/globals.css';
import { CacheProvider } from '@emotion/react';
import { cache } from '../lib/emotion';
import { ThemeProvider } from "theme-ui"


type Props = {
  Component: React.VFC;
  pageProps: Record<string, unknown>;
};


function MyApp({ Component, pageProps }: Props): JSX.Element {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
