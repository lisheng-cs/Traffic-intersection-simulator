import React from 'react'

export default function TrafficPath({ d, active, color }) {
  return (
    <path
      d={d}
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-all duration-500 ${active ? 'opacity-100' : 'opacity-10'}`}
      style={{
        stroke: active ? color : '#6b7280',
        strokeDasharray: active ? '12 8' : '8 8',
        animation: active ? 'dash 1s linear infinite' : 'none'
      }}
    />
  )
}
