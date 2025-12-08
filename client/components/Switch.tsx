import { useEffect, useState } from 'react'

// Walking towards viewer (down direction)
import spriteDownStand from '../../src/assets/images/player-sprite-standing-facing-towards.png'
import spriteDownLeft from '../../src/assets/images/player-down-walk1.png'
import spriteDownRight from '../../src/assets/images/player-down-walk2.png'

const walkingSprites = {
  stand: spriteDownStand,
  left: spriteDownLeft,
  right: spriteDownRight,
}

interface Props {
  onFinish: () => void
}

export default function LoadingScreen({ onFinish }: Props) {
  const [frame, setFrame] = useState<'stand' | 'left' | 'right'>('stand')

  useEffect(() => {
    let animationCount = 0
    let currentFoot: 'left' | 'right' = 'right'

    // Animate walking
    const interval = setInterval(() => {
      setFrame(currentFoot)
      currentFoot = currentFoot === 'left' ? 'right' : 'left'
      animationCount++

      // Return to stand pose briefly every few steps
      if (animationCount % 6 === 0) {
        setFrame('stand')
      }
    }, 150) // Walking animation speed

    // Finish after 2 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval)
      onFinish()
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onFinish])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(180deg, #87CEEB 0%, #7FB3D5 50%, #98D8E8 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 3000;
          animation: fadeIn 0.3s ease-in;
        }

        .sprite-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
          animation: bounce 0.6s ease-in-out infinite;
        }

        .loading-sprite {
          width: 200px;
          height: auto;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          filter: drop-shadow(4px 4px 0 rgba(0, 0, 0, 0.3));
        }

        .loading-text {
          font-family: 'Press Start 2P', 'Courier New', monospace;
          font-size: 1.2rem;
          color: #2c3e50;
          text-shadow: 
            3px 3px 0 #fff,
            4px 4px 0 rgba(0, 0, 0, 0.2);
          letter-spacing: 2px;
          animation: pulse 1s ease-in-out infinite;
        }

        .loading-dots {
          display: inline-block;
          width: 40px;
          text-align: left;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes dots {
          0%, 20% {
            content: '.';
          }
          40% {
            content: '..';
          }
          60%, 100% {
            content: '...';
          }
        }

        @media (max-width: 768px) {
          .loading-sprite {
            width: 150px;
          }
          
          .loading-text {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div className="loading-screen">
        <div className="sprite-container">
          <img
            src={walkingSprites[frame]}
            alt="loading"
            className="loading-sprite"
          />
        </div>
        <div className="loading-text">
          Loading<span className="loading-dots">...</span>
        </div>
      </div>
    </>
  )
}
