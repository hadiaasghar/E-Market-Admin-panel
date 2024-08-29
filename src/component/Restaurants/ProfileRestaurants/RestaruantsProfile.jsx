import React from 'react'
import TitleHead from '../../Header/TitleHead'
import { Outlet } from 'react-router-dom'
import ProfileHeader from '../../Drivers/DriversProfile/ProfileHeader'
import { RestaurantsNavLinks } from '../../../Utils/data'

const RestaruantsProfile = () => {
  return (
    <div>
    <TitleHead title="Restaurants" desc="Restaurants"/>
    <div className='w-[90%] mx-auto'>
      <ProfileHeader profileNavLinks={RestaurantsNavLinks}/>
      <div>
        <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default RestaruantsProfile
