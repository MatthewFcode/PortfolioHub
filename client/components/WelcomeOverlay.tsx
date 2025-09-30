import { useEffect } from 'react'

interface WelcomeOverlayProps {
  onClose: () => void
}

function WelcomeOverlay({ onClose }: WelcomeOverlayProps) {
  useEffect(() => {
    // Prevent scrolling when overlay is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleContinue = () => {
    onClose()
  }

  return (
    <div className="welcome-overlay">
      <div className="welcome-modal">
        <h1>Welcome to my Portfolio Hub❗❗</h1>
        <h2>Control the character with your arrows on your keyboard!!</h2>
        <p>
          Go into the buildings with labels on them to be redirected to the
          projects in another window!!
        </p>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  )
}

export default WelcomeOverlay
