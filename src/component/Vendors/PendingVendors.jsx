import React from 'react'
import TitleHead from '../Header/TitleHead'
import VendorsList from './VendorsList'
import { AllvendorsData } from '../../Utils/data'

const PendingVendors = () => {
  return (
    <div>
      <TitleHead title={"Pending Vendors"} desc2={"> vendors"} link={'/vendors'} desc={"Pending Vendors"}/>
      <div className='w-[90%] mx-auto'>
      <VendorsList allVendorsData={AllvendorsData} />
      </div>
    </div>
  )
}

export default PendingVendors
