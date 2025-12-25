import React, { useState, useEffect } from 'react'
import { useTrafficLight } from '../context/TrafficLightContext'
import Car from './Car'

const routes = {
  northStraight: {
    start: { x: '50%', y: '-5%' },
    stopLine: { x: '50%', y: '25%' },
    end: { x: '50%', y: '105%' },
    rotation: 180,
    direction: 'north',
    type: 'straight'
  },
  northLeft: {
    start: { x: '42%', y: '-5%' },
    stopLine: { x: '42%', y: '25%' },
    end: { x: '105%', y: '50%' },
    rotation: 180,
    direction: 'north',
    type: 'left',
    keyframes: [
      { left: '42%', top: '-5%', rotate: 180 },
      { left: '42%', top: '45%', rotate: 180 },
      { left: '55%', top: '50%', rotate: 90 },
      { left: '105%', top: '50%', rotate: 90 }
    ]
  },
  southStraight: {
    start: { x: '50%', y: '105%' },
    stopLine: { x: '50%', y: '75%' },
    end: { x: '50%', y: '-5%' },
    rotation: 0,
    direction: 'south',
    type: 'straight'
  },
  southLeft: {
    start: { x: '58%', y: '105%' },
    stopLine: { x: '58%', y: '75%' },
    end: { x: '-5%', y: '50%' },
    rotation: 0,
    direction: 'south',
    type: 'left',
    keyframes: [
      { left: '58%', top: '105%', rotate: 0 },
      { left: '58%', top: '55%', rotate: 0 },
      { left: '45%', top: '50%', rotate: -90 },
      { left: '-5%', top: '50%', rotate: -90 }
    ]
  },
  eastStraight: {
    start: { x: '105%', y: '50%' },
    stopLine: { x: '75%', y: '50%' },
    end: { x: '-5%', y: '50%' },
    rotation: -90,
    direction: 'east',
    type: 'straight'
  },
  eastLeft: {
    start: { x: '105%', y: '58%' },
    stopLine: { x: '75%', y: '58%' },
    end: { x: '50%', y: '105%' },
    rotation: -90,
    direction: 'east',
    type: 'left',
    keyframes: [
      { left: '105%', top: '58%', rotate: -90 },
      { left: '55%', top: '58%', rotate: -90 },
      { left: '50%', top: '45%', rotate: 0 },
      { left: '50%', top: '105%', rotate: 0 }
    ]
  },
  westStraight: {
    start: { x: '-5%', y: '50%' },
    stopLine: { x: '25%', y: '50%' },
    end: { x: '105%', y: '50%' },
    rotation: 90,
    direction: 'west',
    type: 'straight'
  },
  westLeft: {
    start: { x: '-5%', y: '42%' },
    stopLine: { x: '25%', y: '42%' },
    end: { x: '50%', y: '-5%' },
    rotation: 90,
    direction: 'west',
    type: 'left',
    keyframes: [
      { left: '-5%', top: '42%', rotate: 90 },
      { left: '45%', top: '42%', rotate: 90 },
      { left: '50%', top: '55%', rotate: 180 },
      { left: '50%', top: '-5%', rotate: 180 }
    ]
  }
}

const phaseRoutes = {
  phase1: ['northStraight', 'northLeft'],
  phase2: ['southStraight', 'southLeft'],
  phase3: ['eastStraight', 'eastLeft'],
  phase4: ['westStraight', 'westLeft']
}

export default function CarManager() {
  const { currentPhase, getCurrentLights } = useTrafficLight()
  const [cars, setCars] = useState([])
  const [carIdCounter, setCarIdCounter] = useState(0)
  const [lastPhase, setLastPhase] = useState(currentPhase)

  const lights = getCurrentLights()

  const canPass = (direction, type) => {
    const lightState = lights[direction][type]
    return lightState === 'green'
  }

  const removeCar = (carId) => {
    setCars(prevCars => prevCars.filter(car => car.id !== carId))
  }

  const spawnCar = (routeKey) => {
    const route = routes[routeKey]
    setCars(prevCars => {
      const newCar = {
        id: carIdCounter,
        route: route,
        color: null,
        isWaiting: !canPass(route.direction, route.type)
      }
      return [...prevCars, newCar]
    })
    setCarIdCounter(prev => prev + 1)
  }

  useEffect(() => {
    if (currentPhase !== lastPhase) {
      const availableRoutes = phaseRoutes[currentPhase] || []
      
      if (availableRoutes.length > 0) {
        availableRoutes.forEach(routeKey => {
          spawnCar(routeKey)
        })
      }
      
      setLastPhase(currentPhase)
    }
  }, [currentPhase])

  useEffect(() => {
    const interval = setInterval(() => {
      const availableRoutes = phaseRoutes[currentPhase] || []
      
      if (availableRoutes.length > 0) {
        availableRoutes.forEach(routeKey => {
          const hasCarInRoute = cars.some(car => 
            car.route.direction === routes[routeKey].direction && 
            car.route.type === routes[routeKey].type &&
            !car.isWaiting
          )
          if (!hasCarInRoute) {
            spawnCar(routeKey)
          }
        })
      }

      const otherRoutes = Object.keys(routes).filter(
        route => !phaseRoutes[currentPhase]?.includes(route)
      )
      
      if (otherRoutes.length > 0 && Math.random() > 0.7) {
        const randomOtherRoute = otherRoutes[Math.floor(Math.random() * otherRoutes.length)]
        spawnCar(randomOtherRoute)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [currentPhase, lights, cars])

  useEffect(() => {
    setCars(prevCars => prevCars.map(car => {
      const canMove = canPass(car.route.direction, car.route.type)
      return {
        ...car,
        isWaiting: !canMove
      }
    }))
  }, [currentPhase, lights])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {cars.map(car => (
        <Car
          key={car.id}
          id={car.id}
          route={car.route}
          color={car.color}
          isWaiting={car.isWaiting}
          onAnimationComplete={removeCar}
        />
      ))}
    </div>
  )
}
