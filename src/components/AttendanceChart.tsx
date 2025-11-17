'use client'
import React from 'react'
import Image from "next/image";

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Customer',
    franchise: 60,
    customer: 30,
  },
  
  {
    name: 'Franchise',
    franchise: 50,
    customer: 40,
  },
  
  
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Graph</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%" >
        <BarChart width={500} height={300} 
            
            responsive
            data={data}
            barSize={20}
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
            <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
            <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
            <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}  />
            <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
            <Bar dataKey="franchise" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="customer" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart

