import React from 'react'
import TrafficLightPole from './TrafficLightPole'
import { useTrafficLight } from '../context/TrafficLightContext'

export default function Intersection() {
  const { getCurrentLights } = useTrafficLight()
  const lights = getCurrentLights()

  return (
    <div className="relative w-full max-w-4xl aspect-square mx-auto">
      <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1/2 bg-gray-700 border-l-2 border-r-2 border-gray-500">
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-white" />
            <div className="absolute bottom-12 left-0 right-0 h-1 border-t-2 border-dashed border-white" />
            <div className="absolute bottom-24 left-0 right-0 h-1 border-t-2 border-dashed border-white" />
            <div className="absolute bottom-36 left-0 right-0 h-1 border-t-2 border-dashed border-white" />
            <div className="absolute bottom-48 left-0 right-0 h-1 border-t-2 border-dashed border-white" />
            <div className="absolute bottom-60 left-0 right-0 h-1 border-t-2 border-dashed border-white" />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-1/2 bg-gray-700 border-l-2 border-r-2 border-gray-500">
            <div className="absolute top-0 left-0 right-0 h-3 bg-white" />
            <div className="absolute top-12 left-0 right-0 h-1 border-b-2 border-dashed border-white" />
            <div className="absolute top-24 left-0 right-0 h-1 border-b-2 border-dashed border-white" />
            <div className="absolute top-36 left-0 right-0 h-1 border-b-2 border-dashed border-white" />
            <div className="absolute top-48 left-0 right-0 h-1 border-b-2 border-dashed border-white" />
            <div className="absolute top-60 left-0 right-0 h-1 border-b-2 border-dashed border-white" />
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-28 w-1/2 bg-gray-700 border-t-2 border-b-2 border-gray-500">
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-white" />
            <div className="absolute right-12 top-0 bottom-0 w-1 border-r-2 border-dashed border-white" />
            <div className="absolute right-24 top-0 bottom-0 w-1 border-r-2 border-dashed border-white" />
            <div className="absolute right-36 top-0 bottom-0 w-1 border-r-2 border-dashed border-white" />
            <div className="absolute right-48 top-0 bottom-0 w-1 border-r-2 border-dashed border-white" />
            <div className="absolute right-60 top-0 bottom-0 w-1 border-r-2 border-dashed border-white" />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-28 w-1/2 bg-gray-700 border-t-2 border-b-2 border-gray-500">
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-white" />
            <div className="absolute left-12 top-0 bottom-0 w-1 border-l-2 border-dashed border-white" />
            <div className="absolute left-24 top-0 bottom-0 w-1 border-l-2 border-dashed border-white" />
            <div className="absolute left-36 top-0 bottom-0 w-1 border-l-2 border-dashed border-white" />
            <div className="absolute left-48 top-0 bottom-0 w-1 border-l-2 border-dashed border-white" />
            <div className="absolute left-60 top-0 bottom-0 w-1 border-l-2 border-dashed border-white" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gray-600 rounded-lg" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-dashed border-yellow-400 rounded-full opacity-30" />

          <TrafficLightPole
            position="northwest"
            straightState={lights.north.straight}
            leftState={lights.north.left}
          />
          <TrafficLightPole
            position="northeast"
            straightState={lights.east.straight}
            leftState={lights.east.left}
          />
          <TrafficLightPole
            position="southwest"
            straightState={lights.west.straight}
            leftState={lights.west.left}
          />
          <TrafficLightPole
            position="southeast"
            straightState={lights.south.straight}
            leftState={lights.south.left}
          />
        </div>
      </div>
    </div>
  )
}
