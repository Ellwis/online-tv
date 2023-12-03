import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material';
import { Offline, Online } from "react-detect-offline";
import { Toaster } from 'react-hot-toast'
import CheckConnection from '@/context/CheckConnection';

const theme = createTheme({
  typography: {
    fontFamily: [
      'casa',
    ].join(','),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position='top-center' />
      <CheckConnection props={<Component {...pageProps} />} key={null} type={''} />
    </ThemeProvider>

  )
}
