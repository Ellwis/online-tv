import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState ,useContext } from 'react'
import "node_modules/video-react/dist/video-react.css";
import Image from 'next/image';
import Header from '@/components/header-section/Header';
import { textSpliterLimit, titleSelector } from './functions'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IpContext } from '@/context/LocationContext';


interface DataType {
  id: string,
  title: string,
  channelurl: string,
  urlImage: string,
  isOnline: string,
  type: string,
}
interface Input {
  reqURL: string,
  bgImage?: string,
  link: string,
  isHide?: boolean
}

const TemplatePage = ({ reqURL, isHide, link }: Input) => {
  const [datas, setDatas] = useState<DataType[]>([]);
  const router = useRouter()
  const query = router.pathname
const location = useContext(IpContext)


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${reqURL}`);
        const json = await response.data;
        setDatas(json);
        toast.success(location.toString())
      } catch (err: unknown) {
        toast.error('مشکل در دریافت اطلاعت');
      };
    }
    getData();
  }, []);


  return (
    <>
      <Header />
      <Box
        sx={{
          py: { md: 0, xs: 2 },
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'row-reverse', md: 'row-reverese' },
          // bgcolor : 'linear-gradient(126deg, #101927 0%, #111d2e 46%, #312771 100%)'
          // backgroundImage: { md: `url(bg.jpg)`, xs: '' },
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
          // backgroundPositionX : '60%'
        }}>
        <Box
          sx={{
            my: { xs: 3, md: 0 },
            py: { xs: 5, md: 0 },
            px: { xs: 3, md: 3 },
            width: { md: '100%', xs: '100%' },
          }}>

          <Typography
            variant='h4'
            fontWeight={'bold'}
            sx={{ textAlign: 'right', my: 3, visibility: { xs: 'visible', md: 'hidden' } }}>
            {titleSelector(query)}
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}

          >
            {
              datas.length !== 0 ?
                datas
                  .filter((data) => data.type === "m3u8" || data.type === 'mp4')
                  .map((data, i) => (
                    <Grid item xs={12} md={2} key={i} sx={{ height: { md: '150px', xs: '30px' }, my: 2 }}>
                      <Link href={`${link}/${data.id}`}>
                        <Box
                          sx={{
                            borderRadius: '10px',
                            boxShadow: 3,
                            height: { md: '150px', xs: '50px' },
                            border: '1px solid white',
                            overflow: 'hidden',
                            transition: '500ms',
                            width: '100%',
                            textAlign: { xs: 'right', md: 'center' },
                            alignItems: 'center',
                            cursor: 'pointer',
                            pt: { md: 5, xs: 1 },
                            '&:hover': {
                              border: '1px solid #ED0F50',
                            },
                            direction: 'rtl'
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                fontSize: { xs: '14px', md: '16px' },
                                mt: { xs: 1, md: 2 },
                                mx: { xs: 3, md: 0 }
                              }}>
                              <span style={{ margin: '0px 10px' }}>
                                {
                                  data.isOnline === '1' ?
                                    <Image src={'/green.png'} height={10} width={10} alt='green' />
                                    :
                                    <Image src={'/red.png'} height={10} width={10} alt='red' />


                                }

                              </span>
                              {textSpliterLimit(data.title, 30)}
                            </Typography>
                          </Box>
                        </Box>
                      </Link>

                    </Grid>


                  ))
                :
                <Box sx={{ width: '50px', mx: 'auto', mt: "20%", height: '150px' }}>
                  <CircularProgress color="error" />
                </Box>
            }
          </Grid>

        </Box>
      </Box>
    </>
  );
}

export default TemplatePage;