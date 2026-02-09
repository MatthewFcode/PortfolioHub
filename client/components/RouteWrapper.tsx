import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import LoadingScreen from './Switch.tsx'

interface Props {
  children: React.ReactNode
}

export default function RouteWrapper({ children }: Props) {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  const firstRender = useRef(true)
  const prevPath = useRef(location.pathname)

  // Trigger loading screen on route change
  // useEffect(() => {
  //   setLoading(true)
  // }, [location.pathname])
  useEffect(() => {
    // Skip loading screen on the first page load
    if (firstRender.current) {
      firstRender.current = false
      prevPath.current = location.pathname
      return
    }

    const from = prevPath.current
    const to = location.pathname

    const isRootToInfo =
      (from === '/' && to === '/game') || (from === '/game' && to === '/')

    if (isRootToInfo) {
      setLoading(true)
    }

    // update old path
    prevPath.current = to
  }, [location.pathname])

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {children}
    </>
  )
}
