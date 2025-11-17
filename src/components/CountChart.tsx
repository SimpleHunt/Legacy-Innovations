'use client'
import Image from "next/image";

import { RadialBarChart, RadialBar, Legend } from 'recharts';

// #region Sample data
const data = [
   
  {
    name: 'Customer',
    count: 40,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: 'Sales',
    count: 60,
    pv: 4567,
    fill: '#83a6ed',
  },
  
];

// #endregion
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* Title */}
        <div className='flex justify-between items-center'>
            <h1 className="text-lg font-semibold">Cutomer</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        {/* Chart */}
        <div className='relative w-full h-[75%]'>
        <RadialBarChart
            style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 }}
            
            cx="50%"
            barSize={32}
            data={data}
            >
            <RadialBar background dataKey="count" />
            
            </RadialBarChart>
            </div>
        {/* Buttom */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
                <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
                <h1 className="font-bold">1234</h1>
                <h2 className="text-xs text-gray-300">Customer</h2>

            </div>
            <div className='flex flex-col gap-1'>
                <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
                <h1 className="font-bold">1234</h1>
                <h2 className="text-xs text-gray-300">Sales</h2>

            </div>
        </div>
    </div>
  )
}

export default CountChart
