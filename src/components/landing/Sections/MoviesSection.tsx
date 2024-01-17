import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const itemData = [
  {
    img: 'sport3.jpg',
    title: 'ورزشی',
    link: '/sport'
  },
  {
    img: 'ghost-m.webp',
    title: 'فیلم وسریال',
    link: '/movies'

  },
  {
    img: 'relig.jpg',
    title: 'مذهبی',
    link: '/religious'

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
      <Box sx={{ width: '100%', display: { md: 'flex', xs: 'block' }, alignItems: 'center', justifyContent: 'space-between' }}>
        {
          itemData.map((item, i) => (
            <Box
              key={i} sx={{ width: { md: '30%', xs: '100%' }, mb: { xs: 3 } }}>
              <Link href={item.link}>

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
              </Link>
            </Box>

          ))
        }

      </Box>
    </Box >
  )

}


export default MoviesSection