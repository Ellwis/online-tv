import TemplatePage from '../templates/PageTemplate';


const AyasPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/yas.jpg'
        link='ayas'
        reqURL='https://raw.githubusercontent.com/ayastv/tv/main/gettvAyas.json'
      />
    </>
  );
}

export default AyasPage;