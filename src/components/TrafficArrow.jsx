import React from 'react'

export default function TrafficArrow({ type, rotation, color, style }) {
  const getArrowPath = () => {
    if (type === 'straight') {
      return 'M12 2L12 22 M8 6L12 2L16 6'
    } else {
      // return 'M12 2L12 22 M8 6L12 2L16 6'
      return 'M19 2H9C7 2 5 4 5 6V12 M9 9L5 12L1 9'
      // return 'M19 12H9C7 12 5 10 5 8V2 M9 5L5 2L1 5'
    }
  }

  const getStrokeColor = () => {
    if (color.includes('green')) return '#22c55e'
    if (color.includes('yellow')) return '#eab308'
    return '#4b5563'
  }

  const getOpacity = () => {
    if (color.includes('opacity-40')) return 0.4
    return 1
  }

  const getFilter = () => {
    if (color.includes('drop-shadow')) return 'drop-shadow(0 0 8px rgba(34,197,94,0.8))'
    return 'none'
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
        className="w-12 h-12"
        style={{
          transform: `rotate(${rotation}deg)`,
          stroke: getStrokeColor(),
          opacity: getOpacity(),
          filter: getFilter()
        }}
      >
        <path d={getArrowPath()} />
      </svg>
    </div>
  )
}
