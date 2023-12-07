import TemplatePage from '../templates/PageTemplate';
import axios from 'axios'
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react'


const SatellitePage = () => {

  return (
    <>
      <TemplatePage
        bgImage='/sat.jpg'
        link='satellite'
        reqURL='https://raw.githubusercontent.com/ayastv/tv/main/gettvsat.json'
        />
    </>
  );
}

export default SatellitePage;