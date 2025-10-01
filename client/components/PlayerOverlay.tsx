import { useEffect } from 'react'

interface WelcomeOverlayProps {
  onClose: () => void
}

function PlayerOverlay({ onClose }: WelcomeOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleContinue = () => {
    onClose()
  }

  const handleKeyDown = () => {
    onClose()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="player-overlay" onClick={handleContinue}>
      <div className="spotlight"></div>
      <div className="player-speech-bubble">
        <p>This is your character❗❗</p>
        <p>
          Control him with your arrow keys (running into the buildings takes you
          to the projects)
        </p>
        <p>Click anywhere or press any key to continue...</p>
      </div>
    </div>
  )
}

export default PlayerOverlay
