import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = () => {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom bednum={1}/>
      <Bedroom bednum={2}/>
      <Bedroom bednum={3}/>
      <Bath size='Half Bath'/>
      <Bath size='Full Bath'/>
    </div>
  )
}

export default FloorPlan