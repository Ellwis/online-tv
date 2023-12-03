import DynamicTemplate from "@/components/templates/DynamicTemplate";



const DynamicRouteMovies = () => {

  return (
    <>
      <DynamicTemplate
        reqURL="https://ayas.ir/server/gettv.php?filter=film"
        link="movies"

      />

    </>
  )

}

export default DynamicRouteMovies