import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { PHASES, PHASE_CONFIG, PHASE_SEQUENCE } from '../constants/phases'

const TrafficLightContext = createContext()

const initialState = {
  currentPhase: PHASES.NS_STRAIGHT,
  timeRemaining: PHASE_CONFIG[PHASES.NS_STRAIGHT].duration,
  isRunning: true
}

function trafficLightReducer(state, action) {
  switch (action.type) {
    case 'TICK':
      if (state.timeRemaining > 1) {
        return { ...state, timeRemaining: state.timeRemaining - 1 }
      } else {
        const currentIndex = PHASE_SEQUENCE.indexOf(state.currentPhase)
        const nextIndex = (currentIndex + 1) % PHASE_SEQUENCE.length
        const nextPhase = PHASE_SEQUENCE[nextIndex]
        return {
          ...state,
          currentPhase: nextPhase,
          timeRemaining: PHASE_CONFIG[nextPhase].duration
        }
      }
    case 'TOGGLE_PAUSE':
      return { ...state, isRunning: !state.isRunning }
    case 'SET_PHASE':
      return {
        ...state,
        currentPhase: action.payload,
        timeRemaining: PHASE_CONFIG[action.payload].duration
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export function TrafficLightProvider({ children }) {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState)

  useEffect(() => {
    if (!state.isRunning) return

    const timer = setInterval(() => {
      dispatch({ type: 'TICK' })
    }, 1000)

    return () => clearInterval(timer)
  }, [state.isRunning])

  const getCurrentLights = () => {
    return PHASE_CONFIG[state.currentPhase].lights
  }

  const value = {
    ...state,
    dispatch,
    getCurrentLights
  }

  return (
    <TrafficLightContext.Provider value={value}>
      {children}
    </TrafficLightContext.Provider>
  )
}

export function useTrafficLight() {
  const context = useContext(TrafficLightContext)
  if (!context) {
    throw new Error('useTrafficLight must be used within TrafficLightProvider')
  }
  return context
}
