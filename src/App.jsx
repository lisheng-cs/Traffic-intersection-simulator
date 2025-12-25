import React from 'react'
import { TrafficLightProvider } from './context/TrafficLightContext'
import Intersection from './components/Intersection'
import ControlPanel from './components/ControlPanel'

function App() {
  return (
    <TrafficLightProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          交通信号灯模拟系统
        </h1>
        <Intersection />
        <ControlPanel />
      </div>
    </TrafficLightProvider>
  )
}

export default App
