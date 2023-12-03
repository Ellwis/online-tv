import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Link from "next/link";

const itemData = [
  {
    img: '4.jpg',
    title: 'صدا وسیما',
    url: '/irib'
  },
  {
    img: '3.jpg',
    title: 'ورزشی',
    url: '/sport'

  },
  {
    img: '1.jpg',
    title: 'مذهبی',
    url: '/religious'

  },
  {
    img: '2.jpg',
    title: 'فیلم وسریال',
    url: '/movies'

  },
];

const ImagesListSection = () => {
  return (
    <Box sx={{
       backgroundImage : {md : 'url(/bg5.gif)' , xs : 'none'},
       backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover'
    }}>
      <Box sx={{ pt: 5, width: { xs: '90%', md: '80%' }, mx: 'auto', textAlign: 'right', height: { md: '100vh' } }}>
        {/* Desktop */}
        <ImageList sx={{display :{xs : 'none' , md : 'block'} }} variant="masonry" cols={4} gap={20}>
          {itemData.map((item) => (
            <Link href={item.url}>
              <Box
                sx={{ filter: 'blur(1px) brightness(30%)', transition: '500ms', '&:hover': { filter: 'blur(0px)', ml: 1 } }}
              >
                <ImageListItem
                  key={item.img}
                >
                  <img
                    src={`${item.img}`}
                    alt={item.title}
                  />
                  <ImageListItemBar sx={{ color: 'white', textAlign: 'center', fontSize: '30px' }} position="top" title={item.title} />
                </ImageListItem>

              </Box>
            </Link>


          ))}

        </ImageList>
        {/* Mobile */}
        <ImageList sx={{display :{xs : 'block' , md : 'none'} }} variant="masonry" cols={2} gap={20}>
          {itemData.map((item) => (
            <Link href={item.url}>
              <Box
                sx={{ filter: 'blur(1px) brightness(30%)', transition: '500ms', '&:hover': { filter: 'blur(0px)', m: 1 } }}
              >
                <ImageListItem
                  key={item.img}
                >
                  <img
                    src={`${item.img}`}
                    alt={item.title}
                  />
                  <ImageListItemBar sx={{ color: 'white', textAlign: 'center', fontSize: '30px' }} position="top" title={item.title} />
                </ImageListItem>

              </Box>
            </Link>


          ))}

        </ImageList>

      </Box>

    </Box>
  )
}

export default ImagesListSection