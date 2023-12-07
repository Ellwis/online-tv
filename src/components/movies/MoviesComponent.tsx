import TemplatePage from '../templates/PageTemplate';


const MoviesPage = () => {


  return (
    <>
      <TemplatePage
        bgImage='/movies.jpg'
        link='movies'
        reqURL='https://raw.githubusercontent.com/ayastv/tv/main/gettvFilm.json'
      />
    </>
  );
}

export default MoviesPage;