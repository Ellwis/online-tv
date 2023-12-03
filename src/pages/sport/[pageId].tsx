import DynamicTemplate from "@/components/templates/DynamicTemplate";



const DynamicRouteSport = () => {

  return (
    <>
      <DynamicTemplate
        reqURL="https://ayas.ir/server/gettv.php?filter=sport"
        link="sport"

      />

    </>
  )

}

export default DynamicRouteSport