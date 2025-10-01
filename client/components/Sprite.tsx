import { useEffect, useState } from 'react'

// Standing
import spriteDown from '../../src/assets/images/player-sprite-standing-facing-towards.png'
import spriteUp from '../../src/assets/images/player-sprite-standing-facing-away.png'
import spriteLeft from '../../src/assets/images/player-sprite-standing-facing-left.png'
import spriteRight from '../../src/assets/images/player-sprite-standing-facing-right.png'

// Walking
import spriteDownLeft from '../../src/assets/images/player-down-walk1.png'
import spriteDownRight from '../../src/assets/images/player-down-walk2.png'
import spriteUpLeft from '../../src/assets/images/player-up-walk1.png'
import spriteUpRight from '../../src/assets/images/player-up-walk2.png'
import spriteLeftLeft from '../../src/assets/images/player-left-walk1.png'
import spriteLeftRight from '../../src/assets/images/player-left-walk2.png'
import spriteRightLeft from '../../src/assets/images/player-right-walk1.png'
import spriteRightRight from '../../src/assets/images/player-right-walk2.png'

const sprites = {
  up: {
    stand: spriteUp,
    left: spriteUpLeft,
    right: spriteUpRight,
  },
  down: {
    stand: spriteDown,
    left: spriteDownLeft,
    right: spriteDownRight,
  },
  left: {
    stand: spriteLeft,
    left: spriteLeftLeft,
    right: spriteLeftRight,
  },
  right: {
    stand: spriteRight,
    left: spriteRightLeft,
    right: spriteRightRight,
  },
}

interface Sprite {
  x: number
  y: number
}

interface Props {
  position: Sprite
  setPosition: React.Dispatch<React.SetStateAction<Sprite>>
  containerRef: React.RefObject<HTMLDivElement>
  scale: number
}

function PlayerSprite({ position, setPosition, containerRef, scale }: Props) {
  const [direction, setDirection] = useState<'up' | 'down' | 'left' | 'right'>(
    'down',
  )
  const [isWalking, setIsWalking] = useState(false)
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [nextFoot, setNextFoot] = useState<'left' | 'right'>('right')
  const [frame, setFrame] = useState<'stand' | 'left' | 'right'>('stand')

  // Scale these values based on viewport
  const GRID_SIZE = 22.5 * scale
  const spriteWidthNum: number = 75 * scale
  const spriteWidthCss: string = `${spriteWidthNum}px`

  const movePlayer = (dx: number, dy: number, newDir: typeof direction) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const maxX = rect.width - spriteWidthNum
    const maxY = rect.height - spriteWidthNum

    setDirection(newDir)
    setIsWalking(true)

    const steps = GRID_SIZE / 3
    let i = 0

    setFrame(nextFoot)

    const interval = setInterval(() => {
      i++
      setPosition((prev) => {
        const newX = Math.min(Math.max(prev.x + dx / steps, 0), maxX)
        const newY = Math.min(Math.max(prev.y + dy / steps, 0), maxY)
        return { x: newX, y: newY }
      })

      if (i === Math.floor(steps / 2)) {
        setFrame('stand')
      }

      if (i >= steps) {
        clearInterval(interval)
        setIsWalking(false)
        setFrame('stand')
        setNextFoot((f) => (f === 'left' ? 'right' : 'left'))
      }
    }, 10)
    return () => clearInterval(interval)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault()
        setActiveKey(e.key)
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === activeKey) {
        setActiveKey(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [activeKey])

  useEffect(() => {
    if (!activeKey || isWalking) return

    switch (activeKey) {
      case 'ArrowUp':
        movePlayer(0, -GRID_SIZE, 'up')
        break
      case 'ArrowDown':
        movePlayer(0, GRID_SIZE, 'down')
        break
      case 'ArrowLeft':
        movePlayer(-GRID_SIZE, 0, 'left')
        break
      case 'ArrowRight':
        movePlayer(GRID_SIZE, 0, 'right')
        break
    }
  }, [activeKey, isWalking, position])

  useEffect(() => {
    const handleBlur = () => {
      setActiveKey(null)
      setIsWalking(false)
    }

    const handleFocus = () => {
      setActiveKey(null)
    }

    window.addEventListener('blur', handleBlur)
    window.addEventListener('focus', handleFocus)

    return () => {
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
      }}
    >
      <img
        alt="player"
        src={sprites[direction][frame]}
        style={{ width: spriteWidthCss }}
        id="player"
      />
    </div>
  )
}

export default PlayerSprite
