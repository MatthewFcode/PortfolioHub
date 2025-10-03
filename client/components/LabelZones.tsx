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
    left: 371,
    top: 188,
  },
  {
    id: 'Echo',
    left: 1025,
    top: 77,
  },
  {
    id: 'FilmFeels',
    left: 1317,
    top: 68,
  },
  {
    id: 'MatchPredictor',
    left: 827,
    top: 348,
  },
]

const labelZonesJpLaptop: LabelZones[] = [
  {
    id: 'InsightStack',
    left: 273,
    top: 120,
  },
  {
    id: 'Echo',
    left: 781,
    top: 20,
  },
  {
    id: 'FilmFeels',
    left: 1065,
    top: 20,
  },
  {
    id: 'MatchPredictor',
    left: 641,
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
