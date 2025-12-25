import React from 'react'

export default function LightBulb({ color, isActive, isArrow = false, rotation = 0 }) {
  const colorClasses = {
    red: {
      base: 'bg-red-900 border-red-800',
      active: 'bg-red-500',
      glow: 'shadow-[0_0_15px_#ef4444,0_0_30px_#ef4444]'
    },
    yellow: {
      base: 'bg-yellow-900 border-yellow-800',
      active: 'bg-yellow-400',
      glow: 'shadow-[0_0_15px_#facc15,0_0_30px_#facc15]'
    },
    green: {
      base: 'bg-green-900 border-green-800',
      active: 'bg-green-500',
      glow: 'shadow-[0_0_15px_#22c55e,0_0_30px_#22c55e]'
    }
  }

  const currentColor = colorClasses[color]

  return (
    <div
      className={`
        relative w-8 h-8 rounded-full border-3 transition-all duration-300
        ${isActive ? `${currentColor.active} ${currentColor.glow}` : currentColor.base}
      `}
    >
      {isArrow && (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`absolute inset-0 w-6 h-6 m-auto ${isActive ? 'text-white' : 'text-gray-600'}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <path d="M12 4l-8 8h5v8h6v-8h5z" />
        </svg>
      )}
    </div>
  )
}
