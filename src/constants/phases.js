export const PHASES = {
  NS_STRAIGHT: 'NS_STRAIGHT',
  NS_STRAIGHT_YELLOW: 'NS_STRAIGHT_YELLOW',
  NS_LEFT: 'NS_LEFT',
  NS_LEFT_YELLOW: 'NS_LEFT_YELLOW',
  EW_STRAIGHT: 'EW_STRAIGHT',
  EW_STRAIGHT_YELLOW: 'EW_STRAIGHT_YELLOW',
  EW_LEFT: 'EW_LEFT',
  EW_LEFT_YELLOW: 'EW_LEFT_YELLOW'
}

export const PHASE_CONFIG = {
  [PHASES.NS_STRAIGHT]: {
    name: '南北直行通行',
    duration: 10,
    lights: {
      north: { straight: 'green', left: 'red' },
      south: { straight: 'green', left: 'red' },
      east: { straight: 'red', left: 'red' },
      west: { straight: 'red', left: 'red' }
    }
  },
  [PHASES.NS_STRAIGHT_YELLOW]: {
    name: '南北直行黄灯',
    duration: 3,
    lights: {
      north: { straight: 'yellow', left: 'red' },
      south: { straight: 'yellow', left: 'red' },
      east: { straight: 'red', left: 'red' },
      west: { straight: 'red', left: 'red' }
    }
  },
  [PHASES.NS_LEFT]: {
    name: '南北左转通行',
    duration: 8,
    lights: {
      north: { straight: 'red', left: 'green' },
      south: { straight: 'red', left: 'green' },
      east: { straight: 'red', left: 'red' },
      west: { straight: 'red', left: 'red' }
    }
  },
  [PHASES.NS_LEFT_YELLOW]: {
    name: '南北左转黄灯',
    duration: 3,
    lights: {
      north: { straight: 'red', left: 'yellow' },
      south: { straight: 'red', left: 'yellow' },
      east: { straight: 'red', left: 'red' },
      west: { straight: 'red', left: 'red' }
    }
  },
  [PHASES.EW_STRAIGHT]: {
    name: '东西直行通行',
    duration: 10,
    lights: {
      north: { straight: 'red', left: 'red' },
      south: { straight: 'red', left: 'red' },
      east: { straight: 'green', left: 'red' },
      west: { straight: 'green', left: 'red' }
    }
  },
  [PHASES.EW_STRAIGHT_YELLOW]: {
    name: '东西直行黄灯',
    duration: 3,
    lights: {
      north: { straight: 'red', left: 'red' },
      south: { straight: 'red', left: 'red' },
      east: { straight: 'yellow', left: 'red' },
      west: { straight: 'yellow', left: 'red' }
    }
  },
  [PHASES.EW_LEFT]: {
    name: '东西左转通行',
    duration: 8,
    lights: {
      north: { straight: 'red', left: 'red' },
      south: { straight: 'red', left: 'red' },
      east: { straight: 'red', left: 'green' },
      west: { straight: 'red', left: 'green' }
    }
  },
  [PHASES.EW_LEFT_YELLOW]: {
    name: '东西左转黄灯',
    duration: 3,
    lights: {
      north: { straight: 'red', left: 'red' },
      south: { straight: 'red', left: 'red' },
      east: { straight: 'red', left: 'yellow' },
      west: { straight: 'red', left: 'yellow' }
    }
  }
}

export const PHASE_SEQUENCE = [
  PHASES.NS_STRAIGHT,
  PHASES.NS_STRAIGHT_YELLOW,
  PHASES.NS_LEFT,
  PHASES.NS_LEFT_YELLOW,
  PHASES.EW_STRAIGHT,
  PHASES.EW_STRAIGHT_YELLOW,
  PHASES.EW_LEFT,
  PHASES.EW_LEFT_YELLOW
]
