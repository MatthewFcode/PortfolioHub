import { useEffect, useState } from 'react'
import { LabelZones } from '../../models/zones.ts'

const labelZonesMonitor: LabelZones[] = [
  {
    id: 'InsightStack',
    left: 418,
    top: 168,
  },
  {
    id: 'Echo',
    left: 1168,
    top: 38,
  },
  {
    id: 'FilmFeels',
    left: 1498,
    top: 36,
  },
  {
    id: 'MatchPredictor',
    left: 938,
    top: 363,
  },
]

const labelZonesLaptop: LabelZones[] = [
  {
    id: 'InsightStack',
    left: 355,
    top: 188,
  },
  {
    id: 'Echo',
    left: 1065,
    top: 77,
  },
  {
    id: 'FilmFeels',
    left: 1300,
    top: 68,
  },
  {
    id: 'MatchPredictor',
    left: 800,
    top: 348,
  },
]

const labelZonesJpLaptop: LabelZones[] = [
  {
    id: 'InsightStack',
    left: 280,
    top: 120,
  },
  {
    id: 'Echo',
    left: 750,
    top: 20,
  },
  {
    id: 'FilmFeels',
    left: 1050,
    top: 20,
  },
  {
    id: 'MatchPredictor',
    left: 650,
    top: 250,
  },
]

export default function useLabelZoneBreakPoints() {
  const [zone, setZone] = useState<LabelZones[]>(labelZonesMonitor)
  useEffect(() => {
    const handleBreakPoints = () => {
      if (window.innerWidth < 1500) {
        setZone(labelZonesJpLaptop)
      } else if (window.innerWidth < 1710) {
        setZone(labelZonesLaptop)
      } else if (window.innerWidth < 2000) {
        setZone(labelZonesMonitor)
      }
    }
    handleBreakPoints()
    window.addEventListener('resize', handleBreakPoints)
    return () => window.removeEventListener('resize', handleBreakPoints)
  }, [])
  return zone
}
