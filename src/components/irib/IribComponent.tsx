import TemplatePage from '../templates/PageTemplate';


const IribPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/irib.jpg'
        link='irib'
        reqURL='https://raw.githubusercontent.com/ayastv/tv/main/gettvTV.json'
      />
    </>
  );
}

export default IribPage;