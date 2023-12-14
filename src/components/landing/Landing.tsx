import Box from '@mui/material/Box';
import Header from '@/components/header-section/Header';
import ImagesListSection from './Sections/CartoonSection';
import Slider from './Slider';
import { Button, Typography, Zoom } from '@mui/material';
import CartoonSection from './Sections/CartoonSection';
import MoviesSection from './Sections/MoviesSection';
import CompetionSection from './Sections/CompetionsSection';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Landing() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Box
      data-aos="fade"
    >
      <Header />
      <Slider />
      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          textAlign: 'center',


        }}>
        <Box
          sx={{
            height: { md: '72px', xs: '100%' },
            borderRadius: '8px',
            bgcolor: 'rgba(252, 239, 202, 1)',
            p: 3,
            mb: 3,
            alignItems: 'center',
            textAlign: 'right'

          }}
        >
          {/* <Image src={'/danger.png'} height={25} width={25} alt='' /> */}
          <Typography ml={1} fontSize={{ md: '16px', xs: '12px' }} >
            آرشیو جدیدترین فیلم های ایرانی که مجوز قانونی پخش گرفته اند در اختیار شما بینندگان عزیز است
          </Typography>

        </Box>

        <Box
          sx={{
            textAlign: 'center',
            mb: 3

          }}
        >
          <Typography variant='h4' fontWeight={'bold'} fontSize={{ md: '28px', xs: '16px' }} mb={3}>از تماشای انیمیشن ها لذت ببرید</Typography>
          <Typography>Plan and book our perfect trip with expert advice, travel tips, destination information and <br /> inspiration from us</Typography>
        </Box>

        <CartoonSection />

        <MoviesSection />

        {/* <CompetionSection /> */}




      </Box>

    </Box>

  );
}

