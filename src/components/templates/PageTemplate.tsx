import { Box, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player/lazy'
import Image from 'next/image';
import Header from '@/components/header-section/Header';
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
  reqURL : string,
  bgImage : string,
  link : string
}

const TemplatePage = ({ reqURL , bgImage , link} :Input) => {
  const [datas, setDatas] = useState<DataType[]>([]);
   const textSpliter = (text : string)=>{
    return text.length > 30 ? text.slice(1,30) + '...' : text

   }

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
      <Header />
      <Box
        sx={{
          py : 10,
          px : 3,
          minHeight : '100vh' ,
          // p: 3,
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'row-reverse', md: 'row-reverese' },
          backgroundImage : {md : `url(${bgImage})` , xs : ''},
          backgroundRepeat : 'no-repeat',
          backgroundSize : 'cover'
        }}>
        <Box
          sx={{
            mt: { xs: 3, md: 0 },
            backgroundColor: 'rgba(16,25,39 , 0.8)',
            width: { md: '100%', xs: '100%' },
            height: { md: 'auto', xs: 'auto' },
            borderRadius: '10px',
            p: {md : 3 , xs : 0},
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
                  <Grid item xs={12} md={2} key={i} sx={{ height: {md : '100px' , xs  : '30px' }, my: 2 }}>
                    <Link href={`${link}/${data.id}`}>
                      <Box
                        sx={{
                          borderRadius: '10px',
                          height: {md : '100px' , xs : '50px'},
                          border: '1px solid white',
                          overflow: 'hidden',
                          transition: '500ms',
                          width: '100%',
                          textAlign: {xs : 'right' , md : 'center'},
                          alignItems :'center' ,
                          cursor: 'pointer',
                          pt: {md : 5 , xs : 1},
                          '&:hover': {
                            border: '1px solid #9FEF00',
                            bgcolor : '#101927'
                          },
                          // flexGrow: 1,
                          direction: 'rtl'
                        }}
                        >
                        <Box>
                          <Typography sx={{fontSize : {xs : '14px' , md : '13px'} , mt :{xs : 1 , md : 0}  , mx: {xs  : 3 , md : 0}}}>
                            <span style={{ margin: '0px 5px' }}>
                              {
                                data.isOnline === '1' ?
                                  <Image src={'/green.png'} height={10} width={10} alt='green' />
                                  :
                                  <Image src={'/red.png'} height={10} width={10} alt='red' />


                              }

                            </span>
                            {textSpliter(data.title)}
                            {/* {data.title} */}
                          </Typography>
                        </Box>
                      </Box>
                    </Link>

                  </Grid>


                ))
                :
                <Box sx={{ width: '50px', mx: 'auto' , mt:"20%" , height : '150px'}}>
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