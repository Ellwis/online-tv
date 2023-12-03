import DynamicTemplate from "@/components/templates/DynamicTemplate";



const DynamicRouteSatellite = () => {

  return (
    <>
      <DynamicTemplate
        reqURL="https://ayas.ir/server/gettv.php?filter=sat"
        link="satellite"

      />

    </>
  )

}

export default DynamicRouteSatellite