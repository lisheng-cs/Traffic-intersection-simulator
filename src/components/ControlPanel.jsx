import React from 'react'
import { useTrafficLight } from '../context/TrafficLightContext'
import { PHASE_CONFIG } from '../constants/phases'

export default function ControlPanel() {
  const { currentPhase, timeRemaining, isRunning, dispatch } = useTrafficLight()

  const phaseName = PHASE_CONFIG[currentPhase].name

  return (
    <div className="fixed top-4 right-4 bg-gray-800 bg-opacity-90 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-700 min-w-[280px]">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        控制面板
      </h2>

      <div className="space-y-4">
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-1">当前相位</div>
          <div className="text-lg font-semibold text-white">{phaseName}</div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-400 mb-1">剩余时间</div>
          <div className="text-3xl font-bold text-cyan-400">{timeRemaining}</div>
          <div className="text-xs text-gray-500 mt-1">秒</div>
        </div>

        <button
          onClick={() => dispatch({ type: 'TOGGLE_PAUSE' })}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
            isRunning
              ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isRunning ? '暂停' : '开始'}
        </button>

        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="w-full py-3 px-4 rounded-lg font-semibold bg-gray-600 hover:bg-gray-500 text-white transition-all duration-200"
        >
          重置
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-600">
        <div className="text-xs text-gray-500 text-center">
          交通信号灯模拟系统 v1.0
        </div>
      </div>
    </div>
  )
}
