import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material';
import { Toaster } from 'react-hot-toast'
import CheckConnection from '@/context/CheckConnection';
// import LocationProvider from '@/context/LocationContext'
import ReactGA from 'react-ga'
import { useRouter } from 'next/router';
import { useEffect } from 'react';



const theme = createTheme({
  typography: {
    fontFamily: [
      'casa',
    ].join(','),
  },
});
const GA_TRACKING_ID = "UA-167116626-1"
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);
    // Report page view
    const handleRouteChange = (url :string) => {
      ReactGA.pageview(url);
    };
    // Track the initial page view
    ReactGA.pageview(window.location.pathname + window.location.search);
    // When the route changes (on client-side route transitions), track the pageview
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup subscription on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  return (
    // <LocationProvider>
      <ThemeProvider theme={theme}>
        <Toaster position='top-center' />
        <CheckConnection props={<Component {...pageProps} />} key={null} type={''} />
      </ThemeProvider>
    // </LocationProvider>


  )
}
