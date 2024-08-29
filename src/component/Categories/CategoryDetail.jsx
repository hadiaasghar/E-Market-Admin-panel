import React from 'react'
import ProfileHeader from '../../component/UserCustomer/ProfileHeader'
import { Outlet } from 'react-router-dom'
import TitleHead from '../../component/Header/TitleHead'
import CategoryHead from './CategoryHead'

const CategoryDetail = () => {
  return (
    <>
    <TitleHead title="User" desc=" Users"/>
    <div className='w-[90%] mx-auto'>
      <CategoryHead/>
      <div>
        <Outlet/>
      </div>
    </div>
    </>
    
  )
}

export default CategoryDetail
