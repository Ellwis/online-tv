import { Box, Typography } from "@mui/material"
import Link from "next/link"



const NotFoundPage = () => {
  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      <Box>
        <Typography sx={{ textAlign: 'center', mt: '20%', fontSize: { xs: '16px', md: '26px' } }}>404 - صفحه مورد نظر یافت نشد</Typography>
        <Link href={'/'}>  <Typography textAlign={'center'}>بازگشت به صفحه اصلی</Typography></Link>
      </Box>

    </Box>
  )

}

export default NotFoundPage