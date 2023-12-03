import Header from "@/components/header-section/Header"
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
        console.log(json)

      } catch (err) {
        toast.error('مشکل در دریافت اطلاعات');
      };
    }
    getData();
  }, []);


  return (
    <>
      <Header />
      <Link href={`/${link}`}><Button sx={{ textAlign: 'left', m: { xs: 3, md: '20px 80px' }, color: 'white' }} >بازگشت </Button></Link>

      <Box
        sx={{
          backgroundColor: '#1E2939',
          height: { xs: 'auto', md: 'auto' },
          width: { md: '90%', xs: '90%' },
          alignItems: 'center',
          p: {md :5 , xs : 3 },
          mx: 'auto',
          // border: '1px solid #9FEF00',
          borderRadius: '10px',
          textAlign: 'center',
          boxShadow: 3,
          display: detail?.channelurl ? { xs: 'block', md: "block" } : { xs: 'none', md: "block" }
        }}>
        {
          detail?.channelurl ?
            <Box>
              <Box>
                <Box sx={{
                  width:{ md :'70%' , xs : '100%'},
                  mx: 'auto'
                }}>
                  <ReactPlayer
                    url={detail.channelurl}
                    width={'100%'}
                    height={'auto'}
                    style={{ margin: 'auto' }}
                    controls
                  />

                </Box>

              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Typography variant='h6'
                  sx={{
                    direction: 'rtl',
                    textAlign: 'right',
                    m: 5,
                    fontSize: '16px'
                  }}>{detail?.title}</Typography>

                {detail?.urlImage.length !== 0 ?
                  <img src={detail?.urlImage} width={40} height={40} alt="logo" style={{ borderRadius: '50%' }} />
                  :
                  null}
              </Box>

            </Box>

            :
            <Box sx={{ mt: '10%', display: { xs: 'none', md: "block" }, height: '40vh' }}>

              <Image src={'/nf.svg'} height={150} width={150} alt='' objectFit="contain" />
              <Typography variant='h6'> موردی برای نمایش وجود ندارد </Typography>
            </Box>

        }
      </Box>

    </>
  )

}

export default DynamicTemplate