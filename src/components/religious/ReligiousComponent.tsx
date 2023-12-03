import TemplatePage from '../templates/PageTemplate';


const ReligiousPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/religious.jpg'
        link='religious'
        reqURL='https://ayas.ir/server/gettv.php?filter=mazhabi'
      />
    </>
  );
}

export default ReligiousPage;