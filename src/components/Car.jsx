import React from 'react'
import { motion } from 'framer-motion'

export default function Car({ id, route, color, isWaiting, onAnimationComplete }) {
  const carColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-cyan-500'
  ]

  const carColor = color || carColors[Math.floor(Math.random() * carColors.length)]

  const getAnimationKeyframes = () => {
    if (route.keyframes && route.keyframes.length > 0) {
      return route.keyframes
    }
    
    return [
      { left: route.start.x, top: route.start.y, rotate: route.rotation },
      { left: route.end.x, top: route.end.y, rotate: route.rotation }
    ]
  }

  const getTargetKeyframe = () => {
    if (isWaiting && route.stopLine) {
      return { left: route.stopLine.x, top: route.stopLine.y, rotate: route.rotation }
    }
    return getAnimationKeyframes()[getAnimationKeyframes().length - 1]
  }

  const animationKeyframes = getAnimationKeyframes()
  const targetKeyframe = getTargetKeyframe()

  return (
    <motion.div
      className={`absolute ${carColor} rounded shadow-lg border-2 border-gray-800`}
      style={{
        width: '40px',
        height: '24px',
        transform: 'translate(-50%, -50%)'
      }}
      initial={{
        left: route.start.x,
        top: route.start.y,
        rotate: route.rotation
      }}
      animate={isWaiting ? targetKeyframe : animationKeyframes}
      transition={{
        duration: isWaiting ? 0.5 : 5,
        ease: isWaiting ? 'linear' : [0.25, 0.1, 0.25, 1]
      }}
      onAnimationComplete={() => {
        if (!isWaiting && onAnimationComplete) {
          onAnimationComplete(id)
        }
      }}
    >
      <div className="absolute bottom-0 left-1 w-3 h-2 bg-gray-900 rounded" />
      <div className="absolute bottom-0 right-1 w-3 h-2 bg-gray-900 rounded" />
      <div className="absolute top-0 left-1 w-3 h-2 bg-gray-900 rounded" />
      <div className="absolute top-0 right-1 w-3 h-2 bg-gray-900 rounded" />
    </motion.div>
  )
}
