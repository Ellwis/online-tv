import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material';
import { Toaster } from 'react-hot-toast'
import ToasterContext from '@/context/ToasterContext';

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
      <Component {...pageProps} />
    </ThemeProvider>

  )
}
