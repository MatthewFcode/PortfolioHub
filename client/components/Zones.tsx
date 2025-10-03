import { useState, useEffect } from 'react'
import { Zones } from '../../models/zones.ts'

const zonesMonitor: Zones[] = [
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
    redirectUrl: 'https://filmfeel-api.onrender.com',
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

const zonesLaptop: Zones[] = [
  {
    id: 'InsightStack',
    x: 330,
    y: 295,
    width: 290,
    height: 170,
    redirectUrl: 'https://github.com/MatthewFcode/InsightStack',
  },
  {
    id: 'FilmFeel',
    x: 1340,
    y: 175,
    width: 140,
    height: 60,
    redirectUrl: 'https://filmfeel-api.onrender.com',
  },
  {
    id: 'Whats Up',
    x: 1055,
    y: 175,
    width: 140,
    height: 60,
    redirectUrl: 'https://whats-up-zh1w.onrender.com/',
  },
  {
    id: 'FurtherForward Web App',
    x: 840,
    y: 470,
    width: 190,
    height: 270,
    redirectUrl: 'https://further-forward-webapp-yep.onrender.com/',
  },
]

const zonesJpLaptop: Zones[] = [
  {
    id: 'InsightStack',
    x: 270,
    y: 270,
    width: 250,
    height: 120,
    redirectUrl: 'https://github.com/MatthewFcode/InsightStack',
  },
  {
    id: 'FilmFeel',
    x: 850,
    y: 100,
    width: 120,
    height: 20,
    redirectUrl: 'https://filmfeel-api.onrender.com',
  },
  {
    id: 'Whats Up',
    x: 870,
    y: 190,
    width: 120,
    height: 20,
    redirectUrl: 'https://whats-up-zh1w.onrender.com/',
  },
  {
    id: 'FurtherForward Web App',
    x: 670,
    y: 400,
    width: 180,
    height: 215,
    redirectUrl: 'https://further-forward-webapp-yep.onrender.com/',
  },
]

export default function useZoneBreakPoints() {
  const [zone, setZone] = useState<Zones[]>(zonesMonitor)
  useEffect(() => {
    const handleBreakPoints = () => {
      if (window.innerWidth < 1500) {
        setZone(zonesJpLaptop)
      } else if (window.innerWidth < 1710) {
        setZone(zonesLaptop)
      } else if (window.innerWidth < 2000) {
        setZone(zonesMonitor)
      }
    }
    handleBreakPoints()
    window.addEventListener('resize', handleBreakPoints)
    return () => window.removeEventListener('resize', handleBreakPoints)
  }, [])
  return zone
}
