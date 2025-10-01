import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Zones } from '../../models/zones.ts'
import map from '../../src/assets/images/portfolio.gif'
import PlayerSprite from './Sprite.tsx'

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

// Label data with original pixel positions
const labels = [
  {
    id: 'InsightStack',
    x: 418,
    y: 168,
    title: 'InsightStack 🗂️',
    description:
      'InsightStack is a full stack social media styled application.',
  },
  {
    id: 'Echo',
    x: 1168,
    y: 38,
    title: 'Whats Up 📱',
    description: 'Web based real time messaging application',
  },
  {
    id: 'FilmFeels',
    x: 1498,
    y: 36,
    title: 'FilmFeels API 🎬',
    description:
      'Movie API, grouping data by mood tags and applying automatic data enrichment.',
  },
  {
    id: 'MatchPredictor',
    x: 938,
    y: 363,
    title: 'FurtherForward 🧢',
    description:
      'Draft website for solo business that I created before the Dev Academy bootcamp',
  },
]

function GameMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 65, y: 475 })
  const [coolDown, setCoolDown] = useState(false)
  const navigate = useNavigate()

  // Calculate scale based on viewport size
  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scaleX = rect.width / MAP_WIDTH
      const scaleY = rect.height / MAP_HEIGHT
      const newScale = Math.min(scaleX, scaleY)

      setScale(newScale)

      // Update position to be scaled
      setPosition({
        x: 65 * newScale,
        y: 475 * newScale,
      })
    }

    // Initial scale calculation
    updateScale()

    // Recalculate on window resize
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

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
      width: 75 * scale,
      height: 75 * scale,
    }

    for (const zone of zones) {
      // Scale zone coordinates for collision detection
      const scaledZone = {
        x: zone.x * scale,
        y: zone.y * scale,
        width: zone.width * scale,
        height: zone.height * scale,
      }

      const inZone =
        playerBox.x < scaledZone.x + scaledZone.width &&
        playerBox.x + playerBox.width > scaledZone.x &&
        playerBox.y < scaledZone.y + scaledZone.height &&
        playerBox.y + playerBox.height > scaledZone.y

      if (inZone) {
        if (zone.redirectUrl.startsWith('http')) {
          window.open(zone.redirectUrl, '_blank')
        } else {
          navigate(zone.redirectUrl)
        }
        setCoolDown(true)
        setTimeout(() => setCoolDown(false), 5000)
        break
      }
    }
  }, [position, navigate, coolDown, scale])

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

      {/* Scaled Labels */}
      {labels.map((label) => (
        <div
          key={label.id}
          className="project-label"
          style={{
            position: 'absolute',
            left: `${(label.x / MAP_WIDTH) * 100}%`,
            top: `${(label.y / MAP_HEIGHT) * 100}%`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            zIndex: 3,
          }}
        >
          <div className="label-content">
            <div className="label-title">{label.title}</div>
            <div className="label-description">{label.description}</div>
          </div>
          <div className="label-arrow">↓</div>
        </div>
      ))}

      <PlayerSprite
        position={position}
        setPosition={setPosition}
        containerRef={containerRef}
        scale={scale}
      />
    </div>
  )
}

export default GameMap
// import { useRef, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router'
// import { Zones } from '../../models/zones.ts'
// import map from '../../src/assets/images/portfolio.gif'
// import PlayerSprite from './Sprite.tsx'

// const MAP_WIDTH = 1890
// const MAP_HEIGHT = 950

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

// // Label data with original pixel positions
// const labels = [
//   {
//     id: 'InsightStack',
//     x: 418,
//     y: 168,
//     title: 'InsightStack 🗂️',
//     description:
//       'InsightStack is a full stack social media styled application.',
//   },
//   {
//     id: 'Echo',
//     x: 1168,
//     y: 38,
//     title: 'Whats Up 📱',
//     description: 'Web based real time messaging application',
//   },
//   {
//     id: 'FilmFeels',
//     x: 1498,
//     y: 36,
//     title: 'FilmFeels API 🎬',
//     description:
//       'Movie API, grouping data by mood tags and applying automatic data enrichment.',
//   },
//   {
//     id: 'MatchPredictor',
//     x: 938,
//     y: 363,
//     title: 'FurtherForward 🧢',
//     description:
//       'Draft website for solo business that I created before the Dev Academy bootcamp',
//   },
// ]

// function GameMap() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [scale, setScale] = useState(1)
//   const [position, setPosition] = useState({ x: 65, y: 475 })
//   const [coolDown, setCoolDown] = useState(false)
//   const navigate = useNavigate()

//   // Calculate scale based on viewport size
//   useEffect(() => {
//     const updateScale = () => {
//       if (!containerRef.current) return

//       const rect = containerRef.current.getBoundingClientRect()
//       const scaleX = rect.width / MAP_WIDTH
//       const scaleY = rect.height / MAP_HEIGHT
//       const newScale = Math.min(scaleX, scaleY)

//       setScale(newScale)

//       // Update position to be scaled
//       setPosition({
//         x: 65 * newScale,
//         y: 475 * newScale,
//       })
//     }

//     // Initial scale calculation
//     updateScale()

//     // Recalculate on window resize
//     window.addEventListener('resize', updateScale)
//     return () => window.removeEventListener('resize', updateScale)
//   }, [])

//   useEffect(() => {
//     const handleFocus = () => {
//       setCoolDown(true)
//       setTimeout(() => setCoolDown(false), 5000)
//     }
//     window.addEventListener('focus', handleFocus)
//     return () => window.removeEventListener('focus', handleFocus)
//   }, [])

//   useEffect(() => {
//     if (coolDown) return

//     const playerBox = {
//       x: position.x,
//       y: position.y,
//       width: 75 * scale,
//       height: 75 * scale,
//     }

//     for (const zone of zones) {
//       // Get the container dimensions
//       if (!containerRef.current) continue
//       const rect = containerRef.current.getBoundingClientRect()

//       // Calculate actual pixel positions based on percentages
//       const scaledZone = {
//         x: (zone.x / MAP_WIDTH) * rect.width,
//         y: (zone.y / MAP_HEIGHT) * rect.height,
//         width: (zone.width / MAP_WIDTH) * rect.width,
//         height: (zone.height / MAP_HEIGHT) * rect.height,
//       }

//       const inZone =
//         playerBox.x < scaledZone.x + scaledZone.width &&
//         playerBox.x + playerBox.width > scaledZone.x &&
//         playerBox.y < scaledZone.y + scaledZone.height &&
//         playerBox.y + playerBox.height > scaledZone.y

//       if (inZone) {
//         if (zone.redirectUrl.startsWith('http')) {
//           window.open(zone.redirectUrl, '_blank')
//         } else {
//           navigate(zone.redirectUrl)
//         }
//         setCoolDown(true)
//         setTimeout(() => setCoolDown(false), 5000)
//         break
//       }
//     }
//   }, [position, navigate, coolDown, scale])

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//       }}
//     >
//       <img
//         src={map}
//         alt="Map"
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           objectPosition: 'center',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           zIndex: 0,
//         }}
//       />

//       {zones.map((z) => (
//         <div
//           key={z.id}
//           style={{
//             position: 'absolute',
//             left: `${(z.x / MAP_WIDTH) * 100}%`,
//             top: `${(z.y / MAP_HEIGHT) * 100}%`,
//             width: `${(z.width / MAP_WIDTH) * 100}%`,
//             height: `${(z.height / MAP_HEIGHT) * 100}%`,
//             border: '2px dashed red',
//             pointerEvents: 'none',
//             zIndex: 2,
//           }}
//         />
//       ))}

//       {/* Scaled Labels */}
//       {labels.map((label) => (
//         <div
//           key={label.id}
//           className="project-label"
//           style={{
//             position: 'absolute',
//             left: `calc(${(label.x / MAP_WIDTH) * 100}% - 15px)`,
//             top: `calc(${(label.y / MAP_HEIGHT) * 100}% - 15px)`,
//             transform: `scale(${scale})`,
//             transformOrigin: 'top left',
//             zIndex: 3,
//           }}
//         >
//           <div className="label-content">
//             <div className="label-title">{label.title}</div>
//             <div className="label-description">{label.description}</div>
//           </div>
//           <div className="label-arrow">↓</div>
//         </div>
//       ))}

//       <PlayerSprite
//         position={position}
//         setPosition={setPosition}
//         containerRef={containerRef}
//         scale={scale}
//       />
//     </div>
//   )
// }

// export default GameMap
