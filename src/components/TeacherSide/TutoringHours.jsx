import React from 'react'

const TutoringHours = () => {
  return (
    <div className="bg-teal-800 px-4 py-4 rounded-md space-y-2 text-lg w-72 flex flex-col ">
    <p>Tutoring Hours</p>
    <div className="flex">
      <p>214</p>
      <p className="flex items-center self-start">
        <svg
          width="11"
          height="5"
          viewBox="0 0 11 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.211914 5L5.21191 0L10.2119 5H0.211914Z"
            fill="url(#paint0_linear_2156_451)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2156_451"
              x1="5.21191"
              y1="0"
              x2="5.21191"
              y2="5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00FFCA" />
              <stop offset="1" stop-color="#45776B" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-teal-400 text-xs">3.15%</span>
      </p>
    </div>
    <p>In August 2023</p>
  </div>
  )
}

export default TutoringHours
