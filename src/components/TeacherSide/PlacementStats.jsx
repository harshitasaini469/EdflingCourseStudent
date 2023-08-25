import React from 'react'

const PlacementStats = () => {
  return (
    <div className="space-y-5">
    <div className="flex flex-wrap gap-2 justify-between mt-5 text-sm sm:text-base lg:text-xl">
        <p className="font-bold">
            Performance Stat
        </p>
        <div className="space-x-4">
            <button className="b rounded-xl px-3 py-1 text-teal-800">Week</button>
            <button className="bg-teal-800 rounded-xl px-3 py-1 text-white">Months</button>
            <button className=" rounded-xl px-3 py-1 text-teal-800">Year</button>
        </div>
       
    </div>
    <div>
            <img src="/TeacherSide/stats.png" alt="" />
        </div>
  </div>
  )
}

export default PlacementStats
