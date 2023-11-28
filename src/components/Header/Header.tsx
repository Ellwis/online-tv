import { Box, Button, TextField, Typography, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import TemporaryDrawer from "./Drawer";
import DrawerCustom from "./Drawer";

const Header: FC = () => {
  const headerTitles = [
    {title : 'ماهواره', url : '/'} ,
    {title : 'اختصاصی یاس', url : '/'} ,
    {title : 'فیلم و سریال', url : '/'} ,
    {title : 'مذهبی', url : '/'} ,
    {title : 'ورزشی', url : '/'} ,
    {title : 'صدا و سیما', url : '/'} ,
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
        bgcolor: 'rgb(26,26,26)',
        boxShadow: 3,


      }}>
        <Box

          sx={{
            width: { md: '25%', xs: '45%' },
            textAlign: { md: 'left', xs: 'left' },
            cursor: 'pointer'
          }} >
          {/* <Link href={'/'}>
            <Image alt="logo" src={'/logo.png'} height={24} width={159} />

          </Link> */}

        </Box>
        <Box
          sx={{
            width: '70%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-evenly',
            visibility: { md: 'visible', xs: 'hidden' }
          }}
        >{
            headerTitles.map((item, i)  => (
              <>
                <Link key={i} href={item.url}><Typography sx={{ cursor: 'pointer' }}>{item.title}</Typography></Link>

              </>

            ))
          }


        </Box>
        <Box
          sx={{
            width: '25%',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Box sx={{ display: { md: 'none', xs: 'block' }, }}>
            <DrawerCustom />
          </Box>



        </Box>
      </Box>
    </Box>
  )

}


export default Header