import { Box, Button, Typography } from "@mui/material"


const CompetionSection = () => {
  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          height: { md: '300px', xs: 'auto' },
          backgroundImage: 'url(/sport3.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '-50px',
          backgroundSize: 'cover',
          borderRadius: '8px',
          boxShadow: 3,
          position: 'relative',
          textAlign: { md: 'center', xs: 'center' },
          color: 'white'

        }}>
        <Box bgcolor={'rgba(0,0,0,0.6)'} width={'100%'} height={'100%'} pt={5} borderRadius={'8px'}>
          <Typography fontWeight={600} fontSize={'30px'} mb={3} color={'white'}>  مسابقات ورزشی با </Typography>
          <Typography fontWeight={600} fontSize={'30px'} mb={3} color={'white'}>AYAS-TV تماشای مسابقات ورزشی با </Typography>
          <Button variant='text' sx={{ py: 1.5, bgcolor: '#FF4C29' ,color : 'white' , width : '20%'}}>تماشا کن</Button>

        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: { md: "70px", xs: 'auto' },
          textAlign: 'center',
          my: 5

        }}
      >
        <Typography fontSize={'18px'} fontWeight={600} mb={3}>Explore the world with My Dream place</Typography>
        <Typography color={'#2F80ED'}>Discover new places and experiences</Typography>

      </Box>

    </Box>

  )

}

export default CompetionSection