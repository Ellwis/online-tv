import React, { useContext, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
// import { IpContext } from '@/context/LocationContext';



const DrawerCustom = ()=> {
  const router = useRouter()
  const [DrawerOpen, setDrawerOpen] = useState(false);
  // const location = useContext(IpContext)
  const headerTitles = [
    { title: 'ماهواره', url: '/satellite'  , display :'block'},
    { title: 'اختصاصی آیاس', url: '/ayas' , display : 'block' },
    { title: 'فیلم و سریال', url: '/movies'  , display : 'block'},
    { title: 'مذهبی', url: '/religious' , display : 'block' },
    { title: 'ورزشی', url: '/sport' , display : 'block' },
    { title: 'صدا و سیما', url: '/irib'  , display : 'block'},
    { title: 'صفحه اصلی', url: '/' , display : 'block' },
    ]


  const list = (
    <Box
      sx={{ width: '200px', direction: 'rtl', textAlign: 'right', bgcolor: 'white', color: 'black', height: '100vh' }}
    >
      <List>
        {
          headerTitles.map((item, i) => (

            <Link key={i} href={item.url} style={{display : item.display}}>
              <ListItem button sx={{ bgcolor: router.pathname === item.url ? '#ED0F50' : '' }}>
                <ListItemText
                  sx={{ textAlign: 'center' }}
                  primary={item.title}
                />
              </ListItem>
            </Link>

          )

          )
        }
      </List>
    </Box>
  );

  return (
    <Box>
      <Typography
        onClick={() => setDrawerOpen(true)}
      >{
          DrawerOpen ?
          <Image src={'/close.svg'} height={15} width={15} alt=''/>
          : 
          <Image src={'/menu.svg'} height={15} width={20} alt='' />
      }
      </Typography>
      <Drawer open={DrawerOpen} onClose={() => setDrawerOpen(false)}>
        {list}
      </Drawer>
    </Box>
  );
}

export default DrawerCustom;