import { Box, Button, TextField, Typography, } from "@mui/material";
import Link from "next/link";
import { FC, useState  , useContext} from "react";
import DrawerCustom from "./Drawer";
import { useRouter } from "next/router";
import Image from "next/image";
// import { IpContext } from "@/context/LocationContext";

const Header: FC = () => {
  const router = useRouter()
  // const location = useContext(IpContext)
  const headerTitles = [
    { title: 'ماهواره', url: '/satellite'  , display :'block'},
    // { title: 'اختصاصی ایاس', url: '/ayas' , display : 'block' },
    { title: 'فیلم و سریال', url: '/movies'  , display : 'block'},
    { title: 'مذهبی', url: '/religious' , display : 'block' },
    { title: 'ورزشی', url: '/sport' , display : 'block' },
    { title: 'صدا و سیما', url: '/irib'  , display : 'block'},
    { title: 'صفحه اصلی', url: '/' , display : 'block' },
    ]



  return (
    <Box>
      {/* TOP */}
      <Box sx={{
        display: 'flex',
        px: { md: 10, xs: 3 },
        width: '100%',
        height: '68px',
        alignItems: 'center',
        mx: 'auto',
        zIndex: '111',
        bgcolor: '#FFFFFF',
        boxShadow: 3,
        position : 'fixed'


      }}>
        <Box
          sx={{
            width: '90%',
            mx: 'auto',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems : 'center' ,
            flexDirection : 'row-reverse'
          }}
          
          >
          {
            headerTitles.map((item, i) => (
              <Link key={i} href={item.url} style={{display : item.display}}>
                  <Typography
                    sx={{
                      display: { md: 'block', xs: 'none' },
                      textAlign: 'center',
                      fontSize : '16px' ,
                      transition: '500ms',
                      cursor: 'pointer',
                      mx : 3,

                      color: router.pathname === item.url ? '#FF4C29' : 'black',
                      "&:hover": { color: '#FF4C29' }
                    }}>
                    {item.title}
                  </Typography>
                </Link>


            ))
          }


        </Box>
        <Box
          sx={{
            width: '25%',
            justifyContent: 'flex-start',
            display: { md: 'none', xs: 'block' },
            textAlign :'right'
          }}
        >
          <Box sx={{ display: { md: 'none', xs: 'block' } }}>
            <DrawerCustom />
          </Box>



        </Box>
      </Box>
    </Box>
  )

}


export default Header