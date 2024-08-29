import TitleHead from "../../component/Header/TitleHead"
import VendorsList from "../../component/Vendors/VendorsList"
import { AllvendorsData} from "../../Utils/data"

const AllVendors = () => {
  return (
    <>
    <TitleHead title="All Vendors" desc="vendors"/>
    <div className="p-4">
     <VendorsList allVendorsData={AllvendorsData} />
    </div>
    </>
    
  )
}

export default AllVendors
