import { Box, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player/lazy'
import Image from 'next/image';
import HeaderComponentfrom '@/components/header/Header';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';
import Link from 'next/link';


interface DataType {
  id: string,
  title: string,
  channelurl: string,
  urlImage: string,
  isOnline: string,
  type: string,
}

interface Input {
  // imgURL :string,
  reqURL : string,
  bgImage : string,
  link : string
}

const TemplatePage = ({ reqURL , bgImage , link} :Input) => {
  const [datas, setDatas] = useState<DataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${reqURL}`);
        const json = await response.data;
        setDatas(json);
        console.log(datas)

      } catch (err) {
        toast.error('مشکل در دریافت اطلاعت');
      };
    }
    getData();
  }, []);


  return (
    <>
      <HeaderComponent/>
      <Box
        sx={{
          p: 3,
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'row-reverse', md: 'row-reverese' },
          backgroundImage : `url(${bgImage})`,
          backgroundRepeat : 'no-repeat',
          backgroundSize : 'cover'
        }}>
        {/* <Box
          sx={{
            backgroundColor: '#1E2939',
            height: { xs: 'auto', md: 'auto' },
            width: { md: '68%', xs: '100%' },
            alignItems: 'center',
            p: 5,
            border: '1px solid #9FEF00',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: 3,
            display: showData.url ? { xs: 'block', md: "block" } : { xs: 'none', md: "block" }
          }}>
          {
            showData.url ?
              <Box>
                <ReactPlayer
                  url={showData.url}
                  width={'100%'}
                  height={'auto'}
                  controls
                  autoPlay
                />
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
              <Box sx={{ mt: '20%', display: { xs: 'none', md: "block" } }}>

                <Image src={'/nf.svg'} height={150} width={150} alt='' objectFit="contain" />
                <Typography variant='h6'> موردی برای نمایش وجود ندارد </Typography>
              </Box>

          }
        </Box> */}
        <Box
          sx={{
            mt: { xs: 3, md: 0 },
            backgroundColor: 'rgba(16,25,39 , 0.8)',
            border: '1px solid #9FEF00',
            width: { md: '100%', xs: '100%' },
            height: { md: '80vh', xs: '80vh' },
            overflowY: { md: 'scroll', xs: 'scroll' },
            borderRadius: '10px',
            p: 3,
            boxShadow: 3,
          }}>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          >
            {
              datas.length !== 0 ?
                datas.map((data, i) => (
                  <Grid item xs={6} md={2} key={i} sx={{ height: '100px', my: 2 }}>
                    <Link href={`${link}/${data.id}`}>
                      <Box
                        sx={{
                          borderRadius: '10px',
                          height: '100px',
                          border: '1px solid white',
                          overflow: 'hidden',
                          transition: '500ms',
                          width: '100%',
                          textAlign: 'center',
                          cursor: 'pointer',
                          pt: 5,
                          '&:hover': {
                            border: '1px solid #9FEF00',
                            boxShadow: 3,
                            bgcolor : '#101927'
                          },
                          flexGrow: 1,
                          direction: 'rtl'
                        }}
                        >
                        <Box>
                          <Typography sx={{fontSize : {xs : '10px' , md : '12px'}}}>
                            <span style={{ margin: '0px 3px' }}>
                              {
                                data.isOnline === '1' ?
                                  <Image src={'/green.png'} height={10} width={10} alt='green' />
                                  :
                                  <Image src={'/red.png'} height={10} width={10} alt='red' />


                              }

                            </span>
                            {data.title}
                          </Typography>
                        </Box>
                      </Box>
                    </Link>

                  </Grid>


                ))
                :
                <Box sx={{ width: '50px', mx: 'auto' , mt:"20%"}}>
                  <CircularProgress color="primary" />
                </Box>
            }
          </Grid>

        </Box>
      </Box>
    </>
  );
}

export default TemplatePage;