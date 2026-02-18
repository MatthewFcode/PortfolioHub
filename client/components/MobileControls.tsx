import { useEffect, useRef } from 'react'

interface Props {
  onDirection: (
    dir: 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | null,
  ) => void
}

/**
 * MobileControls — a virtual d-pad that fires the same
 * synthetic keyboard events the game already listens to.
 *
 * Usage: drop <MobileControls onDirection={...} /> into GameMap
 * and wire onDirection into the same activeKey state used by PlayerSprite.
 *
 * Or, the simpler integration: MobileControls just dispatches real
 * KeyboardEvent objects on window so PlayerSprite picks them up
 * with zero changes.
 */
export default function MobileControls({ onDirection }: Props) {
  const pressedRef = useRef<string | null>(null)

  const fireKey = (key: string, type: 'keydown' | 'keyup') => {
    window.dispatchEvent(new KeyboardEvent(type, { key, bubbles: true }))
  }

  const handleStart = (
    dir: 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight',
  ) => {
    if (pressedRef.current === dir) return
    // Release previous key first
    if (pressedRef.current) {
      fireKey(pressedRef.current, 'keyup')
    }
    pressedRef.current = dir
    fireKey(dir, 'keydown')
    onDirection(dir)
  }

  const handleEnd = () => {
    if (pressedRef.current) {
      fireKey(pressedRef.current, 'keyup')
      pressedRef.current = null
    }
    onDirection(null)
  }

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (pressedRef.current) {
        fireKey(pressedRef.current, 'keyup')
      }
    }
  }, [])

  const btn = (
    dir: 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight',
    label: string,
  ) => (
    <div
      className="dpad-btn"
      onPointerDown={(e) => {
        e.preventDefault()
        handleStart(dir)
      }}
      onPointerUp={handleEnd}
      onPointerCancel={handleEnd}
      onPointerLeave={handleEnd}
    >
      {label}
    </div>
  )

  return (
    <div className="mobile-controls">
      {/* Up */}
      <div className="mobile-controls-row">{btn('ArrowUp', '▲')}</div>

      {/* Left / Centre / Right */}
      <div className="mobile-controls-row">
        {btn('ArrowLeft', '◀')}
        <div className="dpad-center" />
        {btn('ArrowRight', '▶')}
      </div>

      {/* Down */}
      <div className="mobile-controls-row">{btn('ArrowDown', '▼')}</div>
    </div>
  )
}
