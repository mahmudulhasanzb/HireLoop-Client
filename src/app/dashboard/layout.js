import { DashboardSideBar } from '@/components/dashboard/DashboardSideBar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex min-h-screen'>
      <DashboardSideBar/>
      <div className='flex-1 lg:ml-64 p-8'>{ children }</div>
    </div>
  )
}

export default layout
