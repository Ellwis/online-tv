import Header from "@/components/header-section/Header"
import { Box, Button, Divider, Typography, Grid } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { textSpliter, titleSelector } from './functions'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import toast from "react-hot-toast";
import ReactPlayer from "react-player";





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
        // console.log(allDatas)

      } catch (err) {
        toast.error('مشکل در دریافت اطلاعات');
      };
    }
    getData();
  }, []);


  return (
    <>
      <Header />
      <Box p={4} >
        <Box sx={{ pt: 8, display: { md: 'flex', xs: 'block' }, justifyContent: 'space-between' }}>
          <Box
            sx={{ boxShadow: 3, width: { md: '73%', xs: '100%' }, borderRadius: '10px', p: 3 }}>
            {
              detail?.channelurl ?
                <Box>
                  <Box>
                    <Box sx={{
                      width: { md: '100%', xs: '100%' },
                      mx: 'auto'
                    }}>
                      <ReactPlayer
                        url={detail.channelurl}
                        width={'90%'}
                        height={'100%'}
                        style={{ margin: 'auto' }}
                        controls
                        onError={() => toast.error('مشکل در بارگذاری ')}
                      />

                    </Box>
                    <Divider sx={{ my: 1 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography variant='h6'
                        sx={{
                          direction: 'rtl',
                          textAlign: 'right',
                          m: 5,
                          fontSize: { md: '16px', xs: '12px' },
                          width: '50%'
                        }}>{detail?.title}</Typography>

                      {detail?.urlImage.length !== 0 ?
                        <img src={detail?.urlImage} width={40} height={40} alt="logo" style={{ borderRadius: '50%' }} />
                        :
                        null}
                    </Box>
                  </Box>

                </Box>

                :
                <Box sx={{ mt: '5%', display: { xs: 'none', md: "block" }, height: '40vh' , textAlign : 'center' }}>

                  <Image src={'/nf.svg'} height={150} width={150} alt='' objectFit="contain" />
                  <Typography variant='h6'> موردی برای نمایش وجود ندارد </Typography>
                </Box>

            }


          </Box>
          {/* {VIDEO SECTION} */}

          <Box sx={{
            boxShadow: 3,
            width: { md: '25%', xs: '100%' },
            height: '500px',
            borderRadius: '10px',
            textAlign: 'center',
            overflow: 'scroll',
            mt: { xs: 2, md: 0 },
          }}>
            {
              datas.filter((data) => data.type === "m3u8" || data.type === 'mp4')
                .map((data, i) => (
                  <Box p={1} key={i}>
                    <Link href={`${data.id}`}>
                      <Typography sx={{
                        borderRadius: '5px',
                        // boxShadow: 1,
                        pt: 1,
                        height: '50px',
                        transition: '500ms',
                        width: '100%',
                        textAlign: { xs: 'right', md: 'center' },
                        '&:hover': {
                          color: 'red'

                        },
                        direction: 'rtl'
                      }}
                      >{textSpliter(data.title)}</Typography>
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