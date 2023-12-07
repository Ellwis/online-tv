import TemplatePage from '../templates/PageTemplate';


const ReligiousPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/religious.jpg'
        link='religious'
        reqURL='https://raw.githubusercontent.com/ayastv/tv/main/gettvMazhabi.json'
      />
    </>
  );
}

export default ReligiousPage;