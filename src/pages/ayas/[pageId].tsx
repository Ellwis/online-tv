import DynamicTemplate from "@/components/templates/DynamicTemplate";



const DynamicRouteReligious = () => {

  return (
    <>
      <DynamicTemplate
        reqURL="https://ayas.ir/server/gettv.php?filter=ayas"
        link="ayas"

      />

    </>
  )

}

export default DynamicRouteReligious