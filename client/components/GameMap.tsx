import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import useZoneBreakPoints from './Zones.tsx'
import map from '../../src/assets/images/portfolio.gif'
import PlayerSprite from './Sprite.tsx'
import MobileControls from './MobileControls.tsx'

function GameMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 65, y: 475 }) // adjust starting position
  const [coolDown, setCoolDown] = useState(false)

  const zones = useZoneBreakPoints()
  const navigate = useNavigate()

  useEffect(() => {
    const handleFocus = () => {
      setCoolDown(true)
      setTimeout(() => setCoolDown(false), 5000)
    }
    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [])

  useEffect(() => {
    if (coolDown) {
      return
    }
    const playerBox = {
      x: position.x,
      y: position.y,
      width: 75,
      height: 75,
    }

    for (const zone of zones) {
      const inZone =
        playerBox.x < zone.x + zone.width &&
        playerBox.x + playerBox.width > zone.x &&
        playerBox.y < zone.y + zone.height &&
        playerBox.y + playerBox.height > zone.y

      if (inZone) {
        // If external link
        if (zone.redirectUrl.startsWith('http')) {
          window.open(zone.redirectUrl, '_blank')
        } else {
          // Internal route
          navigate(zone.redirectUrl)
        }
      }
    }
  }, [position, navigate])
  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw', // full screen width
        height: '100vh', // full screen height
        backgroundImage: `url(${map})`,
        backgroundSize: 'cover', // cover entire area
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      {zones.map((z) => (
        <div
          key={z.id}
          style={{
            position: 'absolute',
            left: z.x,
            top: z.y,
            width: z.width,
            height: z.height,
            border: '2px dashed red',
            pointerEvents: 'none',
          }}
        />
      ))}
      <PlayerSprite
        position={position}
        setPosition={setPosition}
        containerRef={containerRef}
      />
      <MobileControls onDirection={() => {}} />
    </div>
  )
}

export default GameMap
