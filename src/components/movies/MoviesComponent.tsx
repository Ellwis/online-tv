import TemplatePage from '../templates/PageTemplate';


const MoviesPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/movies.jpg'
        link='movies'
        reqURL='https://ayas.ir/server/gettv.php?filter=film'
      />
    </>
  );
}

export default MoviesPage;