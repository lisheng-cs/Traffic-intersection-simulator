import React from 'react'
import LightBulb from './LightBulb'

export default function TrafficLightPole({ position, straightState, leftState }) {
  const arrowRotations = {
    north: -90,
    south: 90,
    east: 0,
    west: 180
  }

  const positionStyles = {
    north: {
      container: 'top-0 left-1/2 -translate-x-1/2',
      arm: 'h-20',
      pole: 'w-2 h-full bg-gray-900',
      horizontalArm: 'w-48 h-3 bg-gray-900',
      lightsContainer: 'flex-row gap-16'
    },
    south: {
      container: 'bottom-0 left-1/2 -translate-x-1/2',
      arm: 'h-20',
      pole: 'w-2 h-full bg-gray-900',
      horizontalArm: 'w-48 h-3 bg-gray-900',
      lightsContainer: 'flex-row gap-16'
    },
    east: {
      container: 'right-0 top-1/2 -translate-y-1/2',
      arm: 'w-20',
      pole: 'h-2 w-full bg-gray-900',
      horizontalArm: 'h-48 w-3 bg-gray-900',
      lightsContainer: 'flex-col gap-16'
    },
    west: {
      container: 'left-0 top-1/2 -translate-y-1/2',
      arm: 'w-20',
      pole: 'h-2 w-full bg-gray-900',
      horizontalArm: 'h-48 w-3 bg-gray-900',
      lightsContainer: 'flex-col gap-16'
    }
  }

  const currentStyle = positionStyles[position]
  const arrowRotation = arrowRotations[position]

  return (
    <div className={`absolute ${currentStyle.container} ${currentStyle.arm} flex items-center justify-center z-10`}>
      <div className="relative flex items-center justify-center">
        <div className={`absolute ${currentStyle.pole}`} />
        <div className={`absolute ${currentStyle.horizontalArm}`} />
        
        <div className={`flex ${currentStyle.lightsContainer} items-center justify-center`}>
          <div className="bg-gray-800 p-2 rounded-lg border-2 border-gray-700 shadow-xl">
            <div className="text-xs text-gray-400 text-center mb-1">直行</div>
            <div className="flex gap-1">
              <LightBulb color="red" isActive={straightState === 'red'} />
              <LightBulb color="yellow" isActive={straightState === 'yellow'} />
              <LightBulb color="green" isActive={straightState === 'green'} />
            </div>
          </div>
          
          <div className="bg-gray-800 p-2 rounded-lg border-2 border-gray-700 shadow-xl">
            <div className="text-xs text-gray-400 text-center mb-1">左转</div>
            <div className="flex gap-1">
              <LightBulb color="red" isActive={leftState === 'red'} isArrow rotation={arrowRotation} />
              <LightBulb color="yellow" isActive={leftState === 'yellow'} isArrow rotation={arrowRotation} />
              <LightBulb color="green" isActive={leftState === 'green'} isArrow rotation={arrowRotation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
