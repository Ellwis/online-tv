import TemplatePage from '../templates/PageTemplate';


const IribPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/irib.jpg'
        link='irib'
        reqURL='https://ayas.ir/server/gettv.php?filter=tv'
      />
    </>
  );
}

export default IribPage;