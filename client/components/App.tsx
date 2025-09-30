import GameMap from './GameMap'
import WelcomeOverlay from './WelcomeOverlay.tsx'
import PlayerOverlay from './PlayerOverlay.tsx'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
function App() {
  //   const [showOverlay, setShowOverlay] = useState(false)
  const [overlayStep, setOverlayStep] = useState<0 | 1 | 2>(0)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    if (isHomePage) {
      const hasVisited = localStorage.getItem('hasVisited')
      if (!hasVisited) {
        setOverlayStep(1)
      }
    }
  }, [isHomePage])

  const handleWelcomeClose = () => {
    setOverlayStep(2)
  }

  const handlePlayerClose = () => {
    setOverlayStep(0)
    localStorage.setItem('hasVisited', 'true')
  }
  return (
    <>
      {overlayStep === 1 && <WelcomeOverlay onClose={handleWelcomeClose} />}
      {overlayStep === 2 && <PlayerOverlay onClose={handlePlayerClose} />}
      {}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <GameMap />
      </div>
    </>
  )
}

export default App
