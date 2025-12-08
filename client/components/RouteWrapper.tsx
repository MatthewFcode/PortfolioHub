import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import LoadingScreen from './Switch.tsx'

interface Props {
  children: React.ReactNode
}

export default function RouteWrapper({ children }: Props) {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  // Trigger loading screen on route change
  useEffect(() => {
    setLoading(true)
  }, [location.pathname])

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {children}
    </>
  )
}
