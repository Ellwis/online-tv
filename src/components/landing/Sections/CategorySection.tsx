import { Box, Typography } from "@mui/material"

const CategorySection = () => {

  return (
    <Box>
      <Typography variant='h4' fontSize={'28px'} mb={3} textAlign={'left'}>Popular Hotels</Typography>


      <Box
        sx={{
          width: '100%',
          display: { md: 'flex', xs: 'block' },
          py: 2,
          justifyContent: 'space-around',
          textAlign: { md: "left", xs: 'center' },
          boxShadow: 3,
          overflow: 'hidden',
          borderRadius: '8px',


        }}
      >
        <Box
          sx={{
            width: { md: '22%', xs: '100%' },
            mb: { xs: 2 },


          }}
        >
          <Box sx={{
            width: '100%',
            height: '220px',
            backgroundImage: 'url(/hotel1.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '8px',
            boxShadow: 3
          }}>

          </Box>

          {/* <Image layout="responsive"
      src={'/aus.png'} height={220} width={295} alt='' style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
          <Typography fontSize={'20px'} fontWeight={600} my={1}>Lakeside Motel Warefront</Typography>
          <Typography fontSize={'16px'} fontWeight={400}>2246 properties</Typography>

        </Box>
        <Box
          sx={{
            width: { md: '22%', xs: '100%' },
            mb: { xs: 2 }


          }}
        >
          <Box sx={{
            width: '100%',
            height: '220px',
            backgroundImage: 'url(/hotel2.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '8px',
            boxShadow: 3

          }}>

          </Box>

          {/* <Image layout="responsive"
      src={'/jpn.png'} height={220} width={295} alt='' style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
          <Typography fontSize={'20px'} fontWeight={600} my={1}>Recce Graham resort</Typography>
          <Typography fontSize={'16px'} fontWeight={400}>1278 properties</Typography>

        </Box>
        <Box
          sx={{
            width: { md: '22%', xs: '100%' },
            mb: { xs: 2 }


          }}
        >
          <Box sx={{
            width: '100%',
            height: '220px',
            backgroundImage: 'url(/hotel3.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '8px',
            boxShadow: 3

          }}>

          </Box>

          {/* <Image layout="responsive"
      src={'/nz.png'} height={220} width={295} alt='' style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
          <Typography fontSize={'20px'} fontWeight={600} my={1}>Fireside Dinners</Typography>
          <Typography fontSize={'16px'} fontWeight={400}>480 properties</Typography>

        </Box>
        <Box
          sx={{
            width: { md: '22%', xs: '100%' },
            mb: { xs: 2 }


          }}
        >
          <Box sx={{
            width: '100%',
            height: '220px',
            backgroundImage: 'url(/hotel4.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '8px',
            boxShadow: 3
          }}>

          </Box>

          {/* <Image
      layout="responsive"
      objectFit='cover'
      src={'/grc.png'}
      height={220}
      width={295} alt=''
      style={{ borderRadius: '8px', marginBottom: 1, boxShadow: '0px 5px 10px gray' }} /> */}
          <Typography fontSize={'20px'} fontWeight={600} my={1}>Oculous Inn Stay</Typography>
          <Typography fontSize={'16px'} fontWeight={400}>320 properties</Typography>

        </Box>

      </Box>

    </Box>
  )

}

export default CategorySection