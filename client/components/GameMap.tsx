// import { useRef, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router'
// import { Zones } from '../../models/zones.ts'

// import map from '../../src/assets/images/portfolio.gif'
// import PlayerSprite from './Sprite.tsx'

// const zones: Zones[] = [
//   {
//     id: 'InsightStack',
//     x: 380,
//     y: 265,
//     width: 330,
//     height: 220,
//     redirectUrl: 'https://github.com/MatthewFcode/InsightStack',
//   },
//   {
//     id: 'FilmFeel',
//     x: 1540,
//     y: 95,
//     width: 160,
//     height: 120,
//     redirectUrl: 'https://github.com/MatthewFcode/FilmFeel-API',
//   },
//   {
//     id: 'Whats Up',
//     x: 1220,
//     y: 100,
//     width: 160,
//     height: 115,
//     redirectUrl: 'https://whats-up-zh1w.onrender.com/',
//   },
//   {
//     id: 'FurtherForward Web App',
//     x: 980,
//     y: 470,
//     width: 200,
//     height: 325,
//     redirectUrl: 'https://further-forward-webapp-yep.onrender.com/',
//   },
// ]
// function GameMap() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [position, setPosition] = useState({ x: 65, y: 475 }) // adjust starting position
//   const [coolDown, setCoolDown] = useState(false)

//   useEffect(() => {
//     const handleFocus = () => {
//       setCoolDown(true)
//       setTimeout(() => setCoolDown(false), 5000)
//     }
//     window.addEventListener('focus', handleFocus)
//     return () => window.removeEventListener('focus', handleFocus)
//   }, [])

//   const navigate = useNavigate()

//   useEffect(() => {
//     if (coolDown) {
//       return
//     }
//     const playerBox = {
//       x: position.x,
//       y: position.y,
//       width: 75,
//       height: 75,
//     }

//     for (const zone of zones) {
//       const inZone =
//         playerBox.x < zone.x + zone.width &&
//         playerBox.x + playerBox.width > zone.x &&
//         playerBox.y < zone.y + zone.height &&
//         playerBox.y + playerBox.height > zone.y

//       if (inZone) {
//         // If external link
//         if (zone.redirectUrl.startsWith('http')) {
//           window.open(zone.redirectUrl, '_blank')
//         } else {
//           // Internal route
//           navigate(zone.redirectUrl)
//         }
//       }
//     }
//   }, [position, navigate])
//   return (
//     <div
//       ref={containerRef}
//       style={{
//         position: 'relative',
//         width: '100vw', // full screen width
//         height: '100vh', // full screen height
//         backgroundImage: `url(${map})`,
//         backgroundSize: 'cover', // cover entire area
//         backgroundPosition: 'center',
//         overflow: 'hidden',
//       }}
//     >
//       {zones.map((z) => (
//         <div
//           key={z.id}
//           style={{
//             position: 'absolute',
//             left: z.x,
//             top: z.y,
//             width: z.width,
//             height: z.height,
//             border: '2px dashed red',
//             pointerEvents: 'none',
//           }}
//         />
//       ))}
//       <PlayerSprite
//         position={position}
//         setPosition={setPosition}
//         containerRef={containerRef}
//       />
//     </div>
//   )
// }

// export default GameMap
// chatgpt solution
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Zones } from '../../models/zones.ts'
import map from '../../src/assets/images/portfolio.gif'
import PlayerSprite from './Sprite.tsx'

// The natural/original resolution of your map image
// const MAP_WIDTH = 1920
// const MAP_HEIGHT = 1080
const MAP_WIDTH = 1890
const MAP_HEIGHT = 950

const zones: Zones[] = [
  {
    id: 'InsightStack',
    x: 380,
    y: 265,
    width: 330,
    height: 220,
    redirectUrl: 'https://github.com/MatthewFcode/InsightStack',
  },
  {
    id: 'FilmFeel',
    x: 1540,
    y: 95,
    width: 160,
    height: 120,
    redirectUrl: 'https://github.com/MatthewFcode/FilmFeel-API',
  },
  {
    id: 'Whats Up',
    x: 1220,
    y: 100,
    width: 160,
    height: 115,
    redirectUrl: 'https://whats-up-zh1w.onrender.com/',
  },
  {
    id: 'FurtherForward Web App',
    x: 980,
    y: 470,
    width: 200,
    height: 325,
    redirectUrl: 'https://further-forward-webapp-yep.onrender.com/',
  },
]

function GameMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 65, y: 475 })
  const [coolDown, setCoolDown] = useState(false)
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
    if (coolDown) return

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
        if (zone.redirectUrl.startsWith('http')) {
          window.open(zone.redirectUrl, '_blank')
        } else {
          navigate(zone.redirectUrl)
        }
      }
    }
  }, [position, navigate, coolDown])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <img
        src={map}
        alt="Map"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {zones.map((z) => (
        <div
          key={z.id}
          style={{
            position: 'absolute',
            left: `${(z.x / MAP_WIDTH) * 100}%`,
            top: `${(z.y / MAP_HEIGHT) * 100}%`,
            width: `${(z.width / MAP_WIDTH) * 100}%`,
            height: `${(z.height / MAP_HEIGHT) * 100}%`,
            border: '2px dashed red',
            pointerEvents: 'none',
            zIndex: 2,
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
