import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const itemData = [
  {
    img: 'girls-m.webp',
    title: 'دسته دختران',
  },
  {
    img: 'ghost-m.webp',
    title: 'ارواح جنگ',
  },
  {
    img: 'old-m.webp',
    title: 'بلوط پیر',
  },
  // {
  //   img: 'cd.webp',
  //   title: 'گربه سگ',
  // },
];


const MoviesSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Box
    data-aos="zoom-in-up"
    >
      <Typography
        variant='h3'
        sx={{
          fontSize: '28px',
          mt: 5,
          mb: 3,
          textAlign: 'right'
        }}
      >تماشای فیلم وسریال</Typography>
      <Box sx={{ width: '100%', display: { md: 'flex', xs: 'block' }, alignItems: 'center', justifyContent: 'space-between' }}>
        {
          itemData.map((item, i) => (

            <Box
              key={i} sx={{ width: { md: '30%', xs: '100%' }, mb: { xs: 3 } }}>
              <Box

                sx={{
                  backgroundImage: `url(/${item.img})`,
                  backgroundRepeat: 'no-repeat',
                  // filter : 'brightness(30%)' ,
                  backgroundSize: 'cover',
                  width: '100%',
                  height: '230px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  color: 'white',
                  alignItems: 'flex-end',
                  boxShadow: 3,

                }}>
                {/* <Typography>Browse the fastest growing tourism sector in the heart of Australia tourism capital ....</Typography> */}
             
                    <Typography sx={{
                      p: '100px 30px 30px 30px',
                      fontSize: '30px',
                      color: 'white',
                      borderRadius: '8px',
                      bgcolor: 'rgba(0,0,0,0.7)',
                      width: '100%',
                      height: '100%',


                    }} >{item.title}</Typography>


              </Box>
            </Box>
          ))
        }

      </Box>
    </Box>
  )

}


export default MoviesSection