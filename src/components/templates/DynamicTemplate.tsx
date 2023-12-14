import Header from "@/components/header-section/Header"
import { Box, Button, Divider, Typography, Grid, Skeleton, CircularProgress } from "@mui/material";
import axios from "axios";
import JoLPlayer from "jol-player";
import Link from "next/link";
import { textSpliterLimit, titleSelector } from './functions'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import toast from "react-hot-toast";
import ReactPlayer from "react-player";
import AOS from 'aos';
import 'aos/dist/aos.css';




interface DataType {
  id: string,
  title: string,
  channelurl: string,
  urlImage: string,
  isOnline: string,
  type: string
}

interface InputTypes {
  reqURL: string,
  link: string
}


const DynamicTemplate = ({ reqURL, link }: InputTypes) => {
  const [datas, setDatas] = useState<DataType[]>([]);
  const router = useRouter()
  const { pageId } = router.query
  const detail = datas.find((item): any => pageId == item.id ? item : '')


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${reqURL}`);
        const json = await response.data;
        setDatas(json);

      } catch (err) {
        toast.error('مشکل در دریافت اطلاعات');
      };
    }
    getData();
  }, []);
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      <Header />
      <Box sx={{ p: { md: 4, xs: 0 } }}
        data-aos="zoom-in"
        data-aos-anchor-placement="center-center">
        <Box sx={{ pt: 8, display: { md: 'flex', xs: 'block' }, justifyContent: 'space-between' }}>
          {/* {VIDEO SECTION} */}

          <Box
            sx={{ boxShadow: { md: 3, xs: 0 }, width: { md: '73%', xs: '100%' }, borderRadius: '10px', p: { xs: 0, md: 3 } }}>
            {
              detail?.channelurl ?
                <Box>
                  <Box>
                    <Box sx={{
                      width: { md: '100%', xs: '100%' },
                      mx: 'auto',
                    }}>
                       <ReactPlayer
                        url={detail.channelurl}
                        width={'100%'}
                        height={'100%'}
                        style={{ margin: 'auto' }}
                        playing
                        controls


                      // onError={() => toast.error('مشکل در بارگذاری ')}
                      /> 

                    </Box>
                    <Divider sx={{ my: 1 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 3 }}>
                      <Typography variant='h6'
                        sx={{
                          direction: 'rtl',
                          textAlign: 'right',
                          m: 5,
                          fontSize: { md: '16px', xs: '16px' },
                          width: '100%'
                        }}>{detail?.title}</Typography>

                      {detail?.urlImage ?
                        <img src={detail?.urlImage} width={40} height={40} alt="logo" style={{ borderRadius: '50%' }} />
                        :
                        null}
                    </Box>
                  </Box>

                </Box>

                :
                <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
            }


          </Box>

          <Box sx={{ bgcolor: '#FF4C29', display: { md: 'none', xs: 'block' }, color: 'white', borderRadius: '40px 0px' }}>
            <Typography variant="h5" textAlign={'center'} color={'white'}>پیشنهاد</Typography>
          </Box>
          <Box sx={{
            boxShadow: 3,
            mx: 'auto',
            width: { md: '25%', xs: '100%' },
            height: { xs: '36vh', md: '500px' },
            borderRadius: '10px',
            textAlign: 'center',
            overflow: 'scroll',
          }}>
            {
              datas
                .filter((data) => data.type === "m3u8" || data.type === 'mp4')
                .map((data, i) => (
                  <Box p={1} key={i}>
                    <Link href={`${data.id}`}>
                      <Typography sx={{

                        px: 3,
                        pt: 1,
                        height: '50px',
                        transition: '300ms',
                        // borderBottom :{ xs : '1px solid #FF4C29' , md : '0px solid'},
                        width: '100%',
                        textAlign: { xs: 'right', md: 'center' },
                        '&:hover': {
                          color: 'white',
                          bgcolor: '#FF4C29'

                        },
                        direction: 'rtl'
                      }}
                      >
                        {textSpliterLimit(data.title, 25)}
                      </Typography>
                    </Link>

                  </Box>
                ))

            }

          </Box>


        </Box>

      </Box>

    </>
  )

}

export default DynamicTemplate