import { Box, Button, TextField, Typography, } from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";
import DrawerCustom from "./Drawer";
import { useRouter } from "next/router";

const Header: FC = () => {
  const router = useRouter()
  const headerTitles = [
    { title: 'ماهواره', url: '/satellite' },
    { title: 'اختصاصی آیاس', url: '/ayas' },
    { title: 'فیلم و سریال', url: '/movies' },
    { title: 'مذهبی', url: '/religious' },
    { title: 'ورزشی', url: '/sport' },
    { title: 'صدا و سیما', url: '/irib' },
    { title: 'صفحه اصلی', url: '/' },
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
        bgcolor: '#101927',
        boxShadow: 3,


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
              <>
                <Link key={i} href={item.url}>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      transition: '500ms',
                      cursor: 'pointer',
                      color: router.pathname === item.url ? '#9FEF00' : 'white',
                      "&:hover": { color: '#9FEF00' }
                    }}>
                    {item.title}
                  </Typography>
                </Link>

              </>

            ))
          }


        </Box>
        <Box
          sx={{
            width: '25%',
            justifyContent: 'flex-end',
            display: { md: 'none', xs: 'block' },
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