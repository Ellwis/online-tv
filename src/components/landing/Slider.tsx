import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Pagination } from 'swiper/modules';
import { Box, Zoom } from '@mui/material';


const Images = [
  { url: '/football.jpg', alt: '' },
  { url: '/hotel.jpg', alt: '' },
  { url: '/pb.jpg', alt: '' },
  { url: '/soul.jpg', alt: '' },
]
const Slider = () => {
  return (
    <Zoom in style={{ transitionDelay: '500ms' }}>

      <Box py={10} >
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          style={{ textAlign: 'center' }}

        >
          {
            Images.map((img, i) => (

              <SwiperSlide key={i}>
                <Box sx={{}}>
                  <img loading='lazy' src={img.url} style={{ borderRadius: '20px', width: '90%', height: '80%', }} alt={img.alt} />

                </Box>
              </SwiperSlide>
            )
            )
          }
        </Swiper>

      </Box>
    </Zoom>
  );
}

export default Slider
