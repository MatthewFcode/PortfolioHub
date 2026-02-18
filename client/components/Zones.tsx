// import { useState, useEffect } from 'react'
// import { Zones } from '../../models/zones.ts'

// const zonesMonitor: Zones[] = [
//   {
//     id: 'InsightStack',
//     x: 380,
//     y: 265,
//     width: 330,
//     height: 220,
//     redirectUrl: 'https://insightstack.borb.nz/',
//   },
//   {
//     id: 'FilmFeel',
//     x: 1540,
//     y: 95,
//     width: 160,
//     height: 120,
//     redirectUrl: 'https://filmfeels.borb.nz/',
//   },
//   {
//     id: 'Echo',
//     x: 1220,
//     y: 100,
//     width: 160,
//     height: 115,
//     redirectUrl: 'https://echo.borb.nz/',
//   },
//   {
//     id: 'Match Model',
//     x: 980,
//     y: 470,
//     width: 200,
//     height: 325,
//     redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
//   },
// ]

// const zonesLaptop: Zones[] = [
//   {
//     id: 'InsightStack',
//     x: 330,
//     y: 295,
//     width: 290,
//     height: 170,
//     redirectUrl: 'https://insightstack.borb.nz/',
//   },
//   {
//     id: 'FilmFeel',
//     x: 1340,
//     y: 175,
//     width: 140,
//     height: 60,
//     redirectUrl: 'https://filmfeels.borb.nz/',
//   },
//   {
//     id: 'Echo',
//     x: 1055,
//     y: 175,
//     width: 140,
//     height: 60,
//     redirectUrl: 'https://echo.borb.nz/',
//   },
//   {
//     id: 'Match Model',
//     x: 840,
//     y: 470,
//     width: 190,
//     height: 270,
//     redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
//   },
// ]

// const zonesJpLaptop: Zones[] = [
//   {
//     id: 'InsightStack',
//     x: 265,
//     y: 200,
//     width: 250,
//     height: 120,
//     redirectUrl: 'https://insightstack.borb.nz/',
//   },
//   {
//     id: 'FilmFeel',
//     x: 1085,
//     y: 115,
//     width: 120,
//     height: 20,
//     redirectUrl: 'https://filmfeels.borb.nz/',
//   },
//   {
//     id: 'Echo',
//     x: 850,
//     y: 110,
//     width: 120,
//     height: 20,
//     redirectUrl: 'https://echo.borb.nz/',
//   },
//   {
//     id: 'Match Model',
//     x: 667,
//     y: 325,
//     width: 180,
//     height: 215,
//     redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
//   },
// ]

// const zonesMacbookAir: Zones[] = [
//   {
//     id: 'InsightStack',
//     x: 297.5,
//     y: 247.5,
//     width: 270,
//     height: 145,
//     redirectUrl: 'https://insightstack.borb.nz/',
//   },
//   {
//     id: 'FilmFeel',
//     x: 1212.5,
//     y: 145,
//     width: 130,
//     height: 40,
//     redirectUrl: 'https://filmfeels.borb.nz/',
//   },
//   {
//     id: 'Echo',
//     x: 952.5,
//     y: 142.5,
//     width: 130,
//     height: 40,
//     redirectUrl: 'https://echo.borb.nz/',
//   },
//   {
//     id: 'Match Model',
//     x: 753.5,
//     y: 397.5,
//     width: 185,
//     height: 242.5,
//     redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
//   },
// ]

// export default function useZoneBreakPoints() {
//   const [zone, setZone] = useState<Zones[]>(zonesMonitor)
//   useEffect(() => {
//     const handleBreakPoints = () => {
//       if (window.innerWidth < 1440) {
//         setZone(zonesJpLaptop)
//       } else if (window.innerWidth < 1500) {
//         setZone(zonesMacbookAir)
//       } else if (window.innerWidth < 1710) {
//         setZone(zonesLaptop)
//       } else if (window.innerWidth < 2000) {
//         setZone(zonesMonitor)
//       }
//     }
//     handleBreakPoints()
//     window.addEventListener('resize', handleBreakPoints)
//     return () => window.removeEventListener('resize', handleBreakPoints)
//   }, [])
//   return zone
// }

import { useState, useEffect } from 'react'
import { Zones } from '../../models/zones.ts'

const zonesMonitor: Zones[] = [
  {
    id: 'InsightStack',
    x: 380,
    y: 265,
    width: 330,
    height: 220,
    redirectUrl: 'https://insightstack.borb.nz/',
  },
  {
    id: 'FilmFeel',
    x: 1540,
    y: 95,
    width: 160,
    height: 120,
    redirectUrl: 'https://filmfeels.borb.nz/',
  },
  {
    id: 'Echo',
    x: 1220,
    y: 100,
    width: 160,
    height: 115,
    redirectUrl: 'https://echo.borb.nz/',
  },
  {
    id: 'Match Model',
    x: 980,
    y: 470,
    width: 200,
    height: 325,
    redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
  },
]

const zonesLaptop: Zones[] = [
  {
    id: 'InsightStack',
    x: 330,
    y: 295,
    width: 290,
    height: 170,
    redirectUrl: 'https://insightstack.borb.nz/',
  },
  {
    id: 'FilmFeel',
    x: 1340,
    y: 175,
    width: 140,
    height: 60,
    redirectUrl: 'https://filmfeels.borb.nz/',
  },
  {
    id: 'Echo',
    x: 1055,
    y: 175,
    width: 140,
    height: 60,
    redirectUrl: 'https://echo.borb.nz/',
  },
  {
    id: 'Match Model',
    x: 840,
    y: 470,
    width: 190,
    height: 270,
    redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
  },
]

const zonesMacbookAir: Zones[] = [
  {
    id: 'InsightStack',
    x: 297.5,
    y: 247.5,
    width: 270,
    height: 145,
    redirectUrl: 'https://insightstack.borb.nz/',
  },
  {
    id: 'FilmFeel',
    x: 1212.5,
    y: 145,
    width: 130,
    height: 40,
    redirectUrl: 'https://filmfeels.borb.nz/',
  },
  {
    id: 'Echo',
    x: 952.5,
    y: 142.5,
    width: 130,
    height: 40,
    redirectUrl: 'https://echo.borb.nz/',
  },
  {
    id: 'Match Model',
    x: 753.5,
    y: 397.5,
    width: 185,
    height: 242.5,
    redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
  },
]

const zonesJpLaptop: Zones[] = [
  {
    id: 'InsightStack',
    x: 265,
    y: 200,
    width: 250,
    height: 120,
    redirectUrl: 'https://insightstack.borb.nz/',
  },
  {
    id: 'FilmFeel',
    x: 1085,
    y: 115,
    width: 120,
    height: 20,
    redirectUrl: 'https://filmfeels.borb.nz/',
  },
  {
    id: 'Echo',
    x: 850,
    y: 110,
    width: 120,
    height: 20,
    redirectUrl: 'https://echo.borb.nz/',
  },
  {
    id: 'Match Model',
    x: 667,
    y: 325,
    width: 180,
    height: 215,
    redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
  },
]

// Tablet ~1024px
const zonesTablet: Zones[] = [
  {
    id: 'InsightStack',
    x: 200,
    y: 155,
    width: 205,
    height: 95,
    redirectUrl: 'https://insightstack.borb.nz/',
  },
  {
    id: 'FilmFeel',
    x: 840,
    y: 88,
    width: 95,
    height: 16,
    redirectUrl: 'https://filmfeels.borb.nz/',
  },
  {
    id: 'Echo',
    x: 660,
    y: 85,
    width: 95,
    height: 16,
    redirectUrl: 'https://echo.borb.nz/',
  },
  {
    id: 'Match Model',
    x: 517,
    y: 253,
    width: 140,
    height: 167,
    redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
  },
]

// Mobile ~768px
const zonesMobileLg: Zones[] = [
  {
    id: 'InsightStack',
    x: 147,
    y: 115,
    width: 155,
    height: 70,
    redirectUrl: 'https://insightstack.borb.nz/',
  },
  {
    id: 'FilmFeel',
    x: 617,
    y: 65,
    width: 70,
    height: 12,
    redirectUrl: 'https://filmfeels.borb.nz/',
  },
  {
    id: 'Echo',
    x: 485,
    y: 63,
    width: 70,
    height: 12,
    redirectUrl: 'https://echo.borb.nz/',
  },
  {
    id: 'Match Model',
    x: 380,
    y: 186,
    width: 103,
    height: 123,
    redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
  },
]

// Mobile ~480px (phone portrait)
const zonesMobileSm: Zones[] = [
  {
    id: 'InsightStack',
    x: 93,
    y: 72,
    width: 98,
    height: 45,
    redirectUrl: 'https://insightstack.borb.nz/',
  },
  {
    id: 'FilmFeel',
    x: 390,
    y: 41,
    width: 44,
    height: 8,
    redirectUrl: 'https://filmfeels.borb.nz/',
  },
  {
    id: 'Echo',
    x: 307,
    y: 40,
    width: 44,
    height: 8,
    redirectUrl: 'https://echo.borb.nz/',
  },
  {
    id: 'Match Model',
    x: 240,
    y: 117,
    width: 65,
    height: 78,
    redirectUrl: 'https://github.com/MatthewFcode/PL-Match-Model',
  },
]

export default function useZoneBreakPoints() {
  const [zone, setZone] = useState<Zones[]>(zonesMonitor)

  useEffect(() => {
    const handleBreakPoints = () => {
      const w = window.innerWidth
      if (w < 480) {
        setZone(zonesMobileSm)
      } else if (w < 768) {
        setZone(zonesMobileLg)
      } else if (w < 1024) {
        setZone(zonesTablet)
      } else if (w < 1440) {
        setZone(zonesJpLaptop)
      } else if (w < 1500) {
        setZone(zonesMacbookAir)
      } else if (w < 1710) {
        setZone(zonesLaptop)
      } else {
        setZone(zonesMonitor)
      }
    }

    handleBreakPoints()
    window.addEventListener('resize', handleBreakPoints)
    return () => window.removeEventListener('resize', handleBreakPoints)
  }, [])

  return zone
}
