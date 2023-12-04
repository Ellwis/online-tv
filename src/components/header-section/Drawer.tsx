import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const headerTitles = [
  { title: 'ماهواره', url: '/satellite' },
  { title: 'اختصاصی آیاس', url: '/ayas' },
  { title: 'فیلم و سریال', url: '/movies' },
  { title: 'مذهبی', url: '/religious' },
  { title: 'ورزشی', url: '/sport' },
  { title: 'صدا و سیما', url: '/irib' },
  { title: 'صفحه اصلی', url: '/' },
]


function DrawerCustom() {
  const router = useRouter()
  const [DrawerOpen, setDrawerOpen] = useState(false);


  const list = (
    <Box
      sx={{ width: '200px', direction: 'rtl', textAlign: 'right', bgcolor: '#1E2939', color: 'white', height: '100vh' }}
    >
      <List>
        {
          headerTitles.map((item, i) => (

            <Link key={i} href={item.url}>
              <ListItem button sx={{ bgcolor: router.pathname === item.url ? '#9FEF00' : '' }}>
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