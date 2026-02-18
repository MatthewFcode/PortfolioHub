// import { useEffect, useState } from 'react'
// import { LabelZones } from '../../models/zones.ts'

// const labelZonesMonitor: LabelZones[] = [
//   {
//     id: 'InsightStack',
//     left: 418,
//     top: 168,
//   },
//   {
//     id: 'Echo',
//     left: 1168,
//     top: 38,
//   },
//   {
//     id: 'FilmFeels',
//     left: 1498,
//     top: 36,
//   },
//   {
//     id: 'MatchPredictor',
//     left: 938,
//     top: 363,
//   },
// ]

// const labelZonesLaptop: LabelZones[] = [
//   {
//     id: 'InsightStack',
//     left: 371,
//     top: 188,
//   },
//   {
//     id: 'Echo',
//     left: 1025,
//     top: 77,
//   },
//   {
//     id: 'FilmFeels',
//     left: 1317,
//     top: 68,
//   },
//   {
//     id: 'MatchPredictor',
//     left: 827,
//     top: 348,
//   },
// ]

// const labelZonesMacbookAir: LabelZones[] = [
//   {
//     id: 'InsightStack',
//     left: 321,
//     top: 154,
//   },
//   {
//     id: 'Echo',
//     left: 903,
//     top: 48,
//   },
//   {
//     id: 'FilmFeels',
//     left: 1187.25,
//     top: 44,
//   },
//   {
//     id: 'MatchPredictor',
//     left: 734,
//     top: 300,
//   },
// ]

// const labelZonesJpLaptop: LabelZones[] = [
//   {
//     id: 'InsightStack',
//     left: 273,
//     top: 120,
//   },
//   {
//     id: 'Echo',
//     left: 781,
//     top: 20,
//   },
//   {
//     id: 'FilmFeels',
//     left: 1057.5,
//     top: 20,
//   },
//   {
//     id: 'MatchPredictor',
//     left: 641,
//     top: 250,
//   },
// ]

// export default function useLabelZoneBreakPoints() {
//   const [zone, setZone] = useState<LabelZones[]>(labelZonesMonitor)
//   useEffect(() => {
//     const handleBreakPoints = () => {
//       if (window.innerWidth < 1440) {
//         setZone(labelZonesJpLaptop)
//       } else if (window.innerWidth < 1500) {
//         setZone(labelZonesMacbookAir)
//       } else if (window.innerWidth < 1710) {
//         setZone(labelZonesLaptop)
//       } else if (window.innerWidth < 2000) {
//         setZone(labelZonesMonitor)
//       }
//     }
//     handleBreakPoints()
//     window.addEventListener('resize', handleBreakPoints)
//     return () => window.removeEventListener('resize', handleBreakPoints)
//   }, [])
//   return zone
// }

import { useEffect, useState } from 'react'
import { LabelZones } from '../../models/zones.ts'

const labelZonesMonitor: LabelZones[] = [
  { id: 'InsightStack', left: 418, top: 168 },
  { id: 'Echo', left: 1168, top: 38 },
  { id: 'FilmFeels', left: 1498, top: 36 },
  { id: 'MatchPredictor', left: 938, top: 363 },
]

const labelZonesLaptop: LabelZones[] = [
  { id: 'InsightStack', left: 371, top: 188 },
  { id: 'Echo', left: 1025, top: 77 },
  { id: 'FilmFeels', left: 1317, top: 68 },
  { id: 'MatchPredictor', left: 827, top: 348 },
]

const labelZonesMacbookAir: LabelZones[] = [
  { id: 'InsightStack', left: 321, top: 154 },
  { id: 'Echo', left: 903, top: 48 },
  { id: 'FilmFeels', left: 1187.25, top: 44 },
  { id: 'MatchPredictor', left: 734, top: 300 },
]

const labelZonesJpLaptop: LabelZones[] = [
  { id: 'InsightStack', left: 273, top: 120 },
  { id: 'Echo', left: 781, top: 20 },
  { id: 'FilmFeels', left: 1057.5, top: 20 },
  { id: 'MatchPredictor', left: 641, top: 250 },
]

// Tablet ~1024px
const labelZonesTablet: LabelZones[] = [
  { id: 'InsightStack', left: 210, top: 92 },
  { id: 'Echo', left: 616, top: 10 },
  { id: 'FilmFeels', left: 802, top: 10 },
  { id: 'MatchPredictor', left: 493, top: 190 },
]

// Mobile ~768px
const labelZonesMobileLg: LabelZones[] = [
  { id: 'InsightStack', left: 152, top: 68 },
  { id: 'Echo', left: 452, top: 6 },
  { id: 'FilmFeels', left: 588, top: 6 },
  { id: 'MatchPredictor', left: 362, top: 140 },
]

// Mobile ~480px
const labelZonesMobileSm: LabelZones[] = [
  { id: 'InsightStack', left: 96, top: 43 },
  { id: 'Echo', left: 286, top: 2 },
  { id: 'FilmFeels', left: 372, top: 2 },
  { id: 'MatchPredictor', left: 229, top: 88 },
]

export default function useLabelZoneBreakPoints() {
  const [zone, setZone] = useState<LabelZones[]>(labelZonesMonitor)

  useEffect(() => {
    const handleBreakPoints = () => {
      const w = window.innerWidth
      if (w < 480) {
        setZone(labelZonesMobileSm)
      } else if (w < 768) {
        setZone(labelZonesMobileLg)
      } else if (w < 1024) {
        setZone(labelZonesTablet)
      } else if (w < 1440) {
        setZone(labelZonesJpLaptop)
      } else if (w < 1500) {
        setZone(labelZonesMacbookAir)
      } else if (w < 1710) {
        setZone(labelZonesLaptop)
      } else {
        setZone(labelZonesMonitor)
      }
    }

    handleBreakPoints()
    window.addEventListener('resize', handleBreakPoints)
    return () => window.removeEventListener('resize', handleBreakPoints)
  }, [])

  return zone
}
