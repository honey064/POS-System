import React from 'react'

const MiniCard = ({title, icon, number, footerNum}) => {
  return (
    <div className='bg-gray-900/50 backdrop-blur-sm py-5 px-5 rounded-xl w-[50%] border border-gray-800 hover:bg-gray-800/50 transition-all'>
        <div className='flex items-start justify-between'>
            <h1 className='text-white text-lg font-semibold tracking-wide'>{title}</h1>
            <button className={`${title === "Total Earnings" ? "bg-emerald-500" : "bg-indigo-500"} p-3 rounded-lg text-white text-2xl shadow-lg`}>{icon}</button>
        </div>
        <div>
            <h1 className='text-white text-4xl font-bold mt-5'>{
              title === "Total Earnings" ? `₹${number}` : number}</h1>
            <h1 className='text-white text-lg mt-2'><span className='text-emerald-400'>{footerNum}%</span> than yesterday</h1>
        </div>
    </div>
  )
}

export default MiniCard