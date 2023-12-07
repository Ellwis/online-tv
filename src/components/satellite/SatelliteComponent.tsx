import TemplatePage from '../templates/PageTemplate';


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