import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app'
import myTheme from '../nextui/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <NextUIProvider theme={myTheme}>
        <Component {...pageProps} />  
      </NextUIProvider>
    )


}
