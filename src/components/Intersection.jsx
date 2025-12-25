import React from 'react'
import TrafficLightPole from './TrafficLightPole'
import TrafficArrow from './TrafficArrow'
import TrafficPath from './TrafficPath'
import { useTrafficLight } from '../context/TrafficLightContext'
import { PHASES } from '../constants/phases'

export default function Intersection() {
  const { getCurrentLights, currentPhase } = useTrafficLight()
  const lights = getCurrentLights()

  const getArrowColor = (direction, type) => {
    const isAllRed = currentPhase.includes('ALL_RED')
    
    if (isAllRed) {
      return 'text-gray-600 opacity-40'
    }

    const lightState = lights[direction][type]
    
    if (lightState === 'green') {
      return 'text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]'
    } else if (lightState === 'yellow') {
      return 'text-yellow-500'
    } else {
      return 'text-gray-600 opacity-40'
    }
  }

  const isPathActive = (direction, type) => {
    const isAllRed = currentPhase.includes('ALL_RED')
    if (isAllRed) return false
    
    const lightState = lights[direction][type]
    return lightState === 'green'
  }

  return (
    <div className="relative w-full max-w-5xl aspect-square mx-auto">
      <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-1/2 bg-gray-700">
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-white" />
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-yellow-400" />
            <div className="absolute bottom-4 left-0 right-0 h-4 bg-yellow-400" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-8 w-0.5 bg-yellow-500" />
            <div className="absolute left-1/2 -translate-x-[calc(50%+2px)] top-0 bottom-8 w-0.5 bg-yellow-500" />
            <div className="absolute left-1/4 top-0 bottom-8 w-0.5 border-r-2 border-dashed border-white" />
            <div className="absolute left-3/4 top-0 bottom-8 w-0.5 border-r-2 border-dashed border-white" />
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-1/2 bg-gray-700">
            <div className="absolute top-0 left-0 right-0 h-6 bg-white" />
            <div className="absolute top-4 left-0 right-0 h-4 bg-yellow-400" />
            <div className="absolute top-8 left-0 right-0 h-4 bg-yellow-400" />
            <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-0 w-0.5 bg-yellow-500" />
            <div className="absolute left-1/2 -translate-x-[calc(50%+2px)] top-12 bottom-0 w-0.5 bg-yellow-500" />
            <div className="absolute left-1/4 top-12 bottom-0 w-0.5 border-r-2 border-dashed border-white" />
            <div className="absolute left-3/4 top-12 bottom-0 w-0.5 border-r-2 border-dashed border-white" />
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-72 w-1/2 bg-gray-700">
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-white" />
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-yellow-400" />
            <div className="absolute right-4 top-0 bottom-0 w-4 bg-yellow-400" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-8 h-0.5 bg-yellow-500" />
            <div className="absolute top-1/2 -translate-y-[calc(50%+2px)] left-0 right-8 h-0.5 bg-yellow-500" />
            <div className="absolute top-1/4 left-0 right-8 h-0.5 border-b-2 border-dashed border-white" />
            <div className="absolute top-3/4 left-0 right-8 h-0.5 border-b-2 border-dashed border-white" />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-72 w-1/2 bg-gray-700">
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-white" />
            <div className="absolute left-4 top-0 bottom-0 w-4 bg-yellow-400" />
            <div className="absolute left-8 top-0 bottom-0 w-4 bg-yellow-400" />
            <div className="absolute top-1/2 -translate-y-1/2 left-12 right-0 h-0.5 bg-yellow-500" />
            <div className="absolute top-1/2 -translate-y-[calc(50%+2px)] left-12 right-0 h-0.5 bg-yellow-500" />
            <div className="absolute top-1/4 left-12 right-0 h-0.5 border-b-2 border-dashed border-white" />
            <div className="absolute top-3/4 left-12 right-0 h-0.5 border-b-2 border-dashed border-white" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gray-600 rounded-lg" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-4 border-dashed border-yellow-400 rounded-full opacity-30" />

          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
              </marker>
            </defs>
            <TrafficPath
              d="M 38 0 L 38 100"
              active={isPathActive('north', 'straight')}
              color="#22c55e"
              markerEnd="url(#arrowhead)"
            />
            <TrafficPath
              d="M 62 100 L 62 0"
              active={isPathActive('south', 'straight')}
              color="#22c55e"
              markerEnd="url(#arrowhead)"
            />
            <TrafficPath
              d="M 100 38 L 0 38"
              active={isPathActive('east', 'straight')}
              color="#22c55e"
              markerEnd="url(#arrowhead)"
            />
            <TrafficPath
              d="M 0 62 L 100 62"
              active={isPathActive('west', 'straight')}
              color="#22c55e"
              markerEnd="url(#arrowhead)"
            />
            <TrafficPath
              d="M 46 0 Q 46 54 100 54"
              active={isPathActive('north', 'left')}
              color="#22c55e"
              markerEnd="url(#arrowhead)"
            />
            <TrafficPath
              d="M 54 100 Q 54 46 0 46"
              active={isPathActive('south', 'left')}
              color="#22c55e"
              markerEnd="url(#arrowhead)"
            />
            <TrafficPath
              d="M 100 46 Q 54 46 54 100"
              active={isPathActive('east', 'left')}
              color="#22c55e"
              markerEnd="url(#arrowhead)"
            />
            <TrafficPath
              d="M 0 54 Q 46 54 46 0"
              active={isPathActive('west', 'left')}
              color="#22c55e"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          <TrafficArrow
            type="straight"
            rotation={180}
            color={getArrowColor('north', 'straight')}
            style={{ left: '38%', top: '12%', zIndex: 10 }}
          />
          <TrafficArrow
            type="left"
            rotation={90}
            color={getArrowColor('north', 'left')}
            style={{ left: '46%', top: '12%', zIndex: 10 }}
          />

          <TrafficArrow
            type="straight"
            rotation={0}
            color={getArrowColor('south', 'straight')}
            style={{ left: '62%', top: '88%', zIndex: 10 }}
          />
          <TrafficArrow
            type="left"
            rotation={270}
            color={getArrowColor('south', 'left')}
            style={{ left: '54%', top: '88%', zIndex: 10 }}
          />

          <TrafficArrow
            type="straight"
            rotation={270}
            color={getArrowColor('east', 'straight')}
            style={{ left: '88%', top: '38%', zIndex: 10 }}
          />
          <TrafficArrow
            type="left"
            rotation={180}
            color={getArrowColor('east', 'left')}
            style={{ left: '88%', top: '46%', zIndex: 10 }}
          />

          <TrafficArrow
            type="straight"
            rotation={90}
            color={getArrowColor('west', 'straight')}
            style={{ left: '12%', top: '62%', zIndex: 10 }}
          />
          <TrafficArrow
            type="left"
            rotation={0}
            color={getArrowColor('west', 'left')}
            style={{ left: '12%', top: '54%', zIndex: 10 }}
          />

          <TrafficLightPole
            position="north"
            straightState={lights.north.straight}
            leftState={lights.north.left}
          />
          <TrafficLightPole
            position="south"
            straightState={lights.south.straight}
            leftState={lights.south.left}
          />
          <TrafficLightPole
            position="east"
            straightState={lights.east.straight}
            leftState={lights.east.left}
          />
          <TrafficLightPole
            position="west"
            straightState={lights.west.straight}
            leftState={lights.west.left}
          />
        </div>
      </div>
    </div>
  )
}
