import { Box, CircularProgress, Divider, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player/lazy'
import Image from 'next/image';
import Header from './Header/Header';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TheosPlayer } from '@aka_theos/react-hls-player';
import toast from 'react-hot-toast';


interface DataType {
  id: number,
  title: string,
  channelurl: string,
  urlImage: string
}

const SportPage = () => {
  const [datas, setDatas] = useState<DataType[]>([]);
  const [showData, setShowData] = useState({
    name: '',
    url: '',
    img: ''
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://ayas.ir/server/gettv.php?filter=sport');
        const json = await response.data;
        setDatas(json);
      } catch (err) {
        toast('something went wrong...');
      };
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          p: 3,
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'row-reverse', md: 'row-reverese' },
        }}>
        <Box
          sx={{
            backgroundColor: '#1A1A1A',
            height: { xs: 'auto', md: 'auto' },
            width: { md: '68%', xs: '100%' },
            alignItems: 'center',
            p: 5,
            border: '1px solid #272727',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: 3
          }}>
          {/* <Typography variant='h5' sx={{ textAlign: 'right' }}>ورزش</Typography> */}
          {
            showData.url ?
              <Box>
                <ReactPlayer
                  url={showData.url}
                  width={'100%'}
                  height={'auto'}
                  controls
                  autoplay
                />
                {/* <TheosPlayer
                  // src={"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"}
                  src={showData.url}
                  autoPlay={true}
                  controls
                  width={'100%'}
                // height={'100px'}

                />, */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <Typography variant='h6'
                    sx={{
                      direction: 'rtl',
                      textAlign: 'right',
                      m: 5,
                      fontSize: '16px'
                    }}>{showData.name}</Typography>
                  {
                    showData.img.length !== 0 ?
                      <img src={showData.img} width={30} height={30} alt='logo' style={{ borderRadius: '50px', marginLeft: 10, alignItems: 'center' }} />
                      : null
                  }

                </Box>
              </Box>
              :
              <Box sx={{ mt: '20%' }}>

                <Image src={'/nf.svg'} height={150} width={150} alt='' objectFit="contain" />
                <Typography variant='h6'> موردی برای نمایش وجود ندارد </Typography>
              </Box>

          }
        </Box>
        <Box
          sx={{
            mt: { xs: 3, md: 0 },
            backgroundColor: '#1A1A1A',
            border: '1px solid #272727',
            width: { md: '30%', xs: '100%' },
            height: { md: '80vh', xs: '320px' },
            overflowY: { md: 'scroll', xs: 'scroll' },
            borderRadius: '20px',
            p: 3,
            boxShadow: 3,
          }}>

          {
            datas.length !== 0 ?
              datas.map((data, i) => (
                <Box
                  onClick={() => {
                    setShowData({ name: data.title, url: data.channelurl, img: data.urlImage })
                  }}
                  sx={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    transition: '500ms',
                    width: '100%',
                    p: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      border: '1px solid #272727',
                      boxShadow: 3,
                      bgcolor: 'rgb(146,146,152)'
                    },
                    direction: 'rtl'
                  }}
                  key={i}>
                  <Box sx={{ display: 'flex' }}>

                    {data.urlImage ?
                      <img src={`${data.urlImage}`} width={30} height={30} alt='logo' style={{ borderRadius: '50px', marginLeft: 10, alignItems: 'center' }} />
                      :
                      null
                    }
                    <Typography variant='h6' fontSize={'16px'} > {data.title}</Typography>

                  </Box>


                </Box>
              ))
              :
              <Box sx={{ width: '50px', mx: 'auto', mt: '60%' }}>
                <CircularProgress color="inherit" />
              </Box>
          }

        </Box>
      </Box>
    </>
  );
}

export default SportPage;