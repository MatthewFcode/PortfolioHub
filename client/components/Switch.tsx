import { useEffect, useState } from 'react'
import PlayerSprite from './Sprite.tsx'

interface Props {
  onFinish: () => void
}

export default function LoadingScreen({ onFinish }: Props) {
  const [position, setPosition] = useState({ x: 100, y: 200 })
  const [direction, setDirection] = useState<'right'>('right')
  const [frame, setFrame] = useState<'stand' | 'left' | 'right'>('left')
  const [nextFoot, setNextFoot] = useState<'left' | 'right'>('right')

  useEffect(() => {
    let i = 0
    const steps = 10
    const interval = setInterval(() => {
      // Move sprite horizontally for the walking effect
      setPosition((prev) => ({ x: prev.x + 5, y: prev.y }))
      setFrame(nextFoot) // alternate foot
      setNextFoot((f) => (f === 'left' ? 'right' : 'left'))
      i++
      if (i > steps) {
        setFrame('stand')
        i = 0
      }
    }, 100) // ~10 FPS walking

    const timeout = setTimeout(() => {
      clearInterval(interval)
      onFinish()
    }, 2000) // 2 seconds duration

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(50,50,50,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3000,
      }}
    >
      <PlayerSprite
        position={position}
        setPosition={setPosition}
        containerRef={{ current: null }}
      />
    </div>
  )
}
