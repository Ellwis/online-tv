import TemplatePage from '../templates/PageTemplate';


const SatellitePage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/sat.jpg'
        link='satellite'
        reqURL='https://ayas.ir/server/gettv.php?filter=sat'
      />
    </>
  );
}

export default SatellitePage;