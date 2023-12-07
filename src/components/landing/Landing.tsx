import Box from '@mui/material/Box';
import Header from '@/components/header-section/Header';
import ImagesListSection from './ImagesList';
import Slider from './Slider';


export default function Landing() {
  return (
    <Box>
      <Header />
      <Slider />
      <ImagesListSection />
    </Box>
  );
}

