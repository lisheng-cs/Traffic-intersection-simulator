import React from 'react'

export default function TrafficPath({ d, active, color, markerEnd }) {
  return (
    <path
      d={d}
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      markerEnd={markerEnd}
      className={`transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}
      style={{
        stroke: active ? color : 'transparent',
        strokeDasharray: active ? '12 8' : 'none',
        animation: active ? 'dash 1s linear infinite' : 'none'
      }}
    />
  )
}