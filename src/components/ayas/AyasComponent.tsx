import TemplatePage from '../templates/PageTemplate';


const AyasPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/yas.jpg'
        link='ayas'
        reqURL='https://ayas.ir/server/gettv.php?filter=ayas'
      />
    </>
  );
}

export default AyasPage;