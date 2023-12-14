import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const itemData = [
  {
    img: 'tj.webp',
    title: 'تام و جری',
  },
  {
    img: 'wd.webp',
    title: 'اژدهای آرزوها',
  },
  {
    img: 'sm.webp',
    title: 'مرد عنکبوتی',
  },
  {
    img: 'cd.webp',
    title: 'گربه سگ',
  },
];

const CartoonSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <Box

      sx={{
        width: '100%',
        display: { md: 'flex', xs: 'block' },
        py: 2,
        justifyContent: 'space-around',
        textAlign: { md: "right", xs: 'center' },
        overflow: 'hidden',
        borderRadius: '8px',


      }}
    >
      {
        itemData.map((item, i) => (

          <Box
            data-aos="zoom-in-up"
            key={i}
            sx={{
              width: { md: '22%', xs: '70%' },
              mx: 'auto',
              mb: { xs: 2 },
              boxShadow: 3,
              borderRadius: '10px'


            }}
          >
            <Box sx={{
              width: '100%',
              height: '420px',
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '8px'
            }}>

            </Box>

            <Typography fontSize={'16px'} fontWeight={400} m={1} p={1}>{item.title}</Typography>

          </Box>
        ))
      }

    </Box>
  )
}

export default CartoonSection