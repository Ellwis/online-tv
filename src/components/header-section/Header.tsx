import { Box, Button, TextField, Typography, } from "@mui/material";
import Link from "next/link";
import { FC, useState  , useContext} from "react";
import DrawerCustom from "./Drawer";
import { useRouter } from "next/router";
import { IpContext } from "@/context/LocationContext";

const Header: FC = () => {
  const router = useRouter()
  const location = useContext(IpContext)
  const headerTitles = [
    { title: 'ماهواره', url: '/satellite'  , display :location === "Iran"? 'none' : 'block'},
    { title: 'اختصاصی آیاس', url: '/ayas' , display : 'block' },
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
            justifyContent: 'space-evenly',
            visibility: { md: 'visible', xs: 'hidden' }
          }}

        >
          {
            headerTitles.map((item, i) => (
                <Link key={i} href={item.url} style={{display : item.display}}>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      transition: '500ms',
                      cursor: 'pointer',

                      color: router.pathname === item.url ? '#ED0F50' : 'black',
                      "&:hover": { color: '#ED0F50' }
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