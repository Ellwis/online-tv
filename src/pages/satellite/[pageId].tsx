import DynamicTemplate from "@/components/templates/DynamicTemplate";



const DynamicRouteIrib = () => {

  return (
    <>
      <DynamicTemplate
        reqURL="https://ayas.ir/server/gettv.php?filter=sat"
        link="satellite"

      />

    </>
  )

}

export default DynamicRouteIrib