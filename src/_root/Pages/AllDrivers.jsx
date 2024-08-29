import DriversList from "../../component/Drivers/DriversList"
import { AlldriversData } from "../../Utils/data"

const AllDrivers = () => {
  return (
    <div>
    <DriversList
        driversData={AlldriversData}
        initialAlertMessage="Alert"
        initialShow="10"
      />
    </div>
  )
}

export default AllDrivers
