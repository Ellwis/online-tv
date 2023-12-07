import TemplatePage from '../templates/PageTemplate';


const SportPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/sport3.jpg'
        link='sport'
        reqURL='https://raw.githubusercontent.com/ayastv/tv/main/gettvsport.json'
      />
    </>
  );
}

export default SportPage;