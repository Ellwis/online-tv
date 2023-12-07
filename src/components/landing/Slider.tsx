import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
import { useEffect  ,useState} from 'react'
import axios from 'axios';


const Images = [
  { url: '/football.jpg', alt: '' },
  { url: '/hotel.jpg', alt: '' },
  { url: '/pb.jpg', alt: '' },
  { url: '/soul.jpg', alt: '' },
]

const Slider = () => {
  // const [datas , setDatas] = useState()
  // useEffect(() => {
  //   const getImages = async () => {
  //     try {

  //      const res = await axios.get('https://api.themoviedb.org/3/movie/23/images')
  //      const json = await res.data
  //      console.log(json)
  //     } catch(err){
  //       console.log(err)
  //     }
  //   }
  //   getImages()

  // }, [])
  return (
    <Box pt={10}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        style={{ textAlign: 'center' }}

      >
        {
          Images.map((img, i) => (

            <SwiperSlide key={i}><img src={img.url} style={{ borderRadius: '20px' }} height={'80%'} width={'80%'} alt={img.alt} /></SwiperSlide>
          )
          )
        }
      </Swiper>

    </Box>
  );
}

export default Slider
