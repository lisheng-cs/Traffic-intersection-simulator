import React from 'react'
import LightBulb from './LightBulb'

export default function TrafficLightPole({ position, straightState, leftState }) {
  const positionStyles = {
    northwest: 'top-4 left-4',
    northeast: 'top-4 right-4',
    southwest: 'bottom-4 left-4',
    southeast: 'bottom-4 right-4'
  }

  return (
    <div className={`absolute ${positionStyles[position]} flex flex-col gap-2`}>
      <div className="bg-gray-800 p-3 rounded-lg border-2 border-gray-700 shadow-xl">
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <div className="text-xs text-gray-400 text-center mb-1">直行</div>
            <LightBulb color="red" isActive={straightState === 'red'} />
            <LightBulb color="yellow" isActive={straightState === 'yellow'} />
            <LightBulb color="green" isActive={straightState === 'green'} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xs text-gray-400 text-center mb-1">左转</div>
            <LightBulb color="red" isActive={leftState === 'red'} isArrow />
            <LightBulb color="yellow" isActive={leftState === 'yellow'} isArrow />
            <LightBulb color="green" isActive={leftState === 'green'} isArrow />
          </div>
        </div>
      </div>
    </div>
  )
}
