import AttendanceChart from '@/components/AttendanceChart'
import FanchiseChart from '@/components/FanchiseChart'
import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'
import EventCalendar from '@/components/EventCalendar'
import Announcements from '@/components/Announcements'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* User Cards */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='Product'/>
          <UserCard type='Sales'/>
          <UserCard type='Customer'/>
          <UserCard type='Staff'/>
        </div>
        {/* Middle Chart */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* Count Chart */}
          <div className='w-full lg:w-1-3 h-[450px]'>
            <CountChart/>
          </div>
          {/* Attendance Chart */}
          <div className='w-full lg:w-2-3 h-[450px]'>
            <AttendanceChart/>
          </div>
        </div>
        {/* Bottom Chart */}
        <div className=''>
          <FanchiseChart/>
        </div>
      </div>
      
      {/* Left */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage
