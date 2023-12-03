import { Box, Typography } from "@mui/material"
import Header from "../header/Header"


const NotFoundPage = () => {
  return (
    <Box sx={{height: '100vh' , overflow :'hidden'}}> 
    <Header />
      <Box> 
        <Typography  sx={{textAlign :'center' , mt :'20%' , fontSize : {xs : '16px' , md : '26px'}}}>404 - صفحه مورد نظر یافت نشد</Typography>

      </Box>

    </Box>
  )

}

export default NotFoundPage