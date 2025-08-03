import React from 'react'

const MiniCard = ({title, icon, number, footerNum}) => {
  return (
    <div className='bg-white/10 backdrop-blur-md border border-white/20 py-5 px-5 rounded-lg w-[50%] hover:bg-white/20 transition-all'>
        <div className='flex items-start justify-between'>
            <h1 className='text-white text-lg font-semibold tracking-wide'>{title}</h1>
            <button className={`${title === "Total Earnings" ? "bg-gradient-to-r from-green-400 to-green-600" : "bg-gradient-to-r from-amber-400 to-orange-500"} p-3 rounded-lg text-white text-2xl shadow-lg`}>{icon}</button>
        </div>
        <div>
            <h1 className='text-white text-4xl font-bold mt-5'>{
              title === "Total Earnings" ? `₹${number}` : number}</h1>
            <h1 className='text-white text-lg mt-2'><span className='text-green-400'>{footerNum}%</span> than yesterday</h1>
        </div>
    </div>
  )
}

export default MiniCard