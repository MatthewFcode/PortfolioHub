import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Zones } from '../../models/zones.ts'

import map from '../../src/assets/images/portfolio.gif'
import PlayerSprite from './Sprite.tsx'

const zones: Zones[] = [
  {
    id: 'InsightStack',
    x: 345,
    y: 230,
    width: 400,
    height: 295,
    redirectUrl: 'https://github.com/MatthewFcode/InsightStack',
  },
  {
    id: 'FilmFeel',
    x: 1510,
    y: 85,
    width: 230,
    height: 175,
    redirectUrl: 'https://github.com/MatthewFcode/FilmFeel-API',
  },
  {
    id: 'Whats Up',
    x: 1180,
    y: 100,
    width: 235,
    height: 160,
    redirectUrl: 'https://whats-up-zh1w.onrender.com/',
  },
  {
    id: 'FurtherForward Web App',
    x: 930,
    y: 425,
    width: 290,
    height: 425,
    redirectUrl: 'https://further-forward-webapp-yep.onrender.com/',
  },
]
function GameMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 65, y: 475 }) // adjust starting position
  const [coolDown, setCoolDown] = useState(false)

  useEffect(() => {
    const handleFocus = () => {
      setCoolDown(true)
      setTimeout(() => setCoolDown(false), 5000)
    }
    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [])

  const navigate = useNavigate()

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
    </div>
  )
}

export default GameMap
