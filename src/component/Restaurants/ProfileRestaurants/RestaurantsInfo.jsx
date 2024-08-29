import React from 'react'
import ViewCard from './ViewCard'
import { viewCardData } from '../../../Utils/data'
import RestaurantsViewDetail from './RestaurantsViewDetail'
import GalleryView from './GalleryView'
import VendorsDetail from './VendorsDetail'
import WorkingHourDetail from './WorkingHourDetail'
import ServicesDetail from './ServicesDetail'

const RestaurantsInfo = () => {
  

  return (
    <div>
      <ViewCard cardData={viewCardData}/>
      <RestaurantsViewDetail/>
      <GalleryView/>
      <VendorsDetail/>
      <WorkingHourDetail/>
      <ServicesDetail/>
      <div className="flex justify-center mt-4">
        <button 
          // onClick={handleBackClick} 
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default RestaurantsInfo
