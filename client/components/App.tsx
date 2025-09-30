import GameMap from './GameMap'
import WelcomeOverlay from './WelcomeOverlay.tsx'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
function App() {
  const [showOverlay, setShowOverlay] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    if (isHomePage) {
      const hasVisited = localStorage.getItem('hasVisited')
      if (!hasVisited) {
        setShowOverlay(true)
      }
    }
  }, [isHomePage])

  const handleOverlayClose = () => {
    setShowOverlay(false)
    localStorage.setItem('hasVisited', 'true')
  }

  return (
    <>
      {showOverlay && <WelcomeOverlay onClose={handleOverlayClose} />}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <GameMap />
      </div>
    </>
  )
}

export default App
