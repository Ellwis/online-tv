import Box from '@mui/material/Box';
import HeaderComponent from'@/components/header/Header';
import ImagesListSection from './ImagesList';


export default function Landing() {
  return (
    <Box>
      <HeaderComponent/>
      <ImagesListSection />
    </Box>
  );
}

