import TemplatePage from '../templates/PageTemplate';


const SportPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/sport3.jpg'
        link='sport'
        reqURL='https://ayas.ir/server/gettv.php?filter=sport'
      />
    </>
  );
}

export default SportPage;