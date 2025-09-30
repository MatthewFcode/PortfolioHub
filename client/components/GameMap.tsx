import { useRef, useState } from 'react'

import map from '../../src/assets/images/portfolio.gif'
import PlayerSprite from './Sprite.tsx'

function GameMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 65, y: 475 }) // adjust starting position

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
      <PlayerSprite
        position={position}
        setPosition={setPosition}
        containerRef={containerRef}
      />
    </div>
  )
}

export default GameMap
