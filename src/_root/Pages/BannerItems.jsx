import BannersList from "../../component/BannerItems/BannersList"
import TitleHead from "../../component/Header/TitleHead"
import { tableData } from "../../Utils/data"

const BannerItems = () => {
  return (
    <>
    <TitleHead title="Banner Items" desc="Banner Items" />
    <div>
      <BannersList tableData={tableData} rows={5} />;
    </div>
    </>
    
  )
}

export default BannerItems
