import React from 'react'

export default function TrafficArrow({ type, rotation, color, style }) {
  const getArrowPath = () => {
    if (type === 'straight') {
      return 'M12 2L12 22 M8 6L12 2L16 6'
    } else {
      return 'M19 12H9C7 12 5 10 5 8V2 M9 5L5 2L1 5'
    }
  }

  return (
    <div 
      className="absolute transition-all duration-300" 
      style={style}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-12 h-12 ${color}`}
        style={{
          transform: `rotate(${rotation}deg)`
        }}
      >
        <path d={getArrowPath()} />
      </svg>
    </div>
  )
}
