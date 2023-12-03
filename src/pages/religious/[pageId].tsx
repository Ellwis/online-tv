import DynamicTemplate from "@/components/templates/DynamicTemplate";



const DynamicRouteReligious = () => {

  return (
    <>
      <DynamicTemplate
        reqURL="https://ayas.ir/server/gettv.php?filter=mazhabi"
        link="religious"

      />

    </>
  )

}

export default DynamicRouteReligious