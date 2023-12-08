import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import * as React from 'react';


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
          key={i}
            sx={{
              width: { md: '22%', xs: '100%' },
              mb: { xs: 2 },
              boxShadow :3,
              borderRadius : '10px'


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