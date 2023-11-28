import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

function DrawerCustom() {
  const [DrawerOpen, setDrawerOpen] = useState(false);


  const list = (
    <Box
      sx={{ width: '200px', direction: 'rtl', textAlign: 'right' , bgcolor : 'rgb(26,26,26)' , color : 'white' , height : '100vh'}}
    >
      <List>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="ماهواره" />
        </ListItem>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="صدا و سیما" />
        </ListItem>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="ورزشی" />
        </ListItem>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="مذهبی" />
        </ListItem>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="فیلم و سریال" />
        </ListItem>
        <ListItem button>
          <ListItemText sx={{ textAlign: 'center' }} primary="اختصاصی یاس" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <Button
        onClick={() => setDrawerOpen(true)}
        variant='text'
      >
        <Image src={'/menu.svg'} height={20} width={30} alt='' />
      </Button>
      <Drawer open={DrawerOpen} onClose={() => setDrawerOpen(false)}>
        {list}
      </Drawer>
    </Box>
  );
}

export default DrawerCustom;