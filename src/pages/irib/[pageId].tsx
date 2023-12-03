import DynamicTemplate from "@/components/templates/DynamicTemplate";



const DynamicRouteIrib = () => {

  return (
    <>
      <DynamicTemplate
        reqURL="https://ayas.ir/server/gettv.php?filter=tv"
        link="irib"

      />

    </>
  )

}

export default DynamicRouteIrib