import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react'
import axios from 'axios';


const Images = [
  { url: '/football.jpg', alt: '' },
  { url: '/hotel.jpg', alt: '' },
  { url: '/pb.jpg', alt: '' },
  { url: '/soul.jpg', alt: '' },
]

const Slider = () => {
  // const [datas , setDatas] = useState()
  // const options = {
  //   method: 'GET',
  //   url: 'https://api.themoviedb.org/3/account/null/favorite/movies',
  //   params: {language: 'en-US', page: '1', sort_by: 'created_at.asc'},
  //   headers: {accept: 'application/json'}
  // };
  // useEffect(() => {
  //   const getImages = async () => {
  //     try {

  //      const res = await axios.request(options)
  //      const json = await res.data
  //      console.log(json)
  //     } catch(err){
  //       console.log(err)
  //     }
  //   }
  //   getImages()

  // }, [])
  return (
    <Box py={10} >
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        style={{ textAlign: 'center'}}

      >
        {
          Images.map((img, i) => (

            <SwiperSlide key={i}>
              <Box sx={{}}>
                <img src={img.url} style={{ borderRadius: '20px' , width : '90%' , height: '80%',}}  alt={img.alt} />

              </Box>
            </SwiperSlide>
          )
          )
        }
      </Swiper>

    </Box>
  );
}

export default Slider
