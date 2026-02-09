import { useState } from 'react'
import { Link } from 'react-router'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-hamburger-container {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2000;
          font-family: 'Press Start 2P', 'Courier New', monospace;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        .hamburger-button {
          width: 48px;
          height: 48px;
          background: linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%);
          border: 4px solid #333;
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          box-shadow: 
            0 0 0 2px #666,
            0 4px 0 #222,
            0 6px 10px rgba(0, 0, 0, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.5);
          transition: all 0.1s ease;
          position: relative;
        }

        .hamburger-button:hover {
          background: linear-gradient(180deg, #fff 0%, #f0f0f0 100%);
          transform: translateY(-2px);
          box-shadow: 
            0 0 0 2px #888,
            0 6px 0 #333,
            0 8px 15px rgba(0, 0, 0, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.7),
            0 0 20px rgba(255, 255, 255, 0.3);
        }

        .hamburger-button:active {
          transform: translateY(2px);
          box-shadow: 
            0 0 0 2px #666,
            0 2px 0 #222,
            0 4px 5px rgba(0, 0, 0, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.3);
        }

        .hamburger-line {
          width: 24px;
          height: 4px;
          background: #333;
          border-radius: 0;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .menu-overlay {
          margin-top: 12px;
          background: linear-gradient(180deg, #87CEEB 0%, #98D8E8 100%);
          border: 5px solid #5D4E37;
          border-radius: 4px;
          padding: 1.5rem;
          min-width: 220px;
          box-shadow: 
            0 0 0 3px #8B7355,
            0 6px 0 #3d3d3d,
            0 8px 15px rgba(0, 0, 0, 0.5);
          animation: menuSlideIn 0.3s ease-out;
          position: relative;
        }

        .menu-overlay::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          border: 2px dashed rgba(255, 255, 255, 0.3);
          pointer-events: none;
        }

        .menu-text {
          margin: 0;
          font-size: 0.65rem;
          font-weight: 700;
          color: #2c3e50;
          text-shadow: 
            1px 1px 0 rgba(255, 255, 255, 0.8),
            2px 2px 0 rgba(0, 0, 0, 0.1);
          letter-spacing: 1px;
          line-height: 1.6;
          text-align: center;
        }

        @keyframes menuSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .hamburger-button {
            width: 40px;
            height: 40px;
          }
          
          .hamburger-line {
            width: 20px;
            height: 3px;
          }
          
          .menu-overlay {
            padding: 1rem;
            min-width: 180px;
          }
          
          .menu-text {
            font-size: 0.5rem;
          }
        }
      `}</style>

      <div className="pixel-hamburger-container">
        {/* Hamburger Button */}
        <div onClick={toggleMenu} className="hamburger-button">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        {/* Menu Overlay */}
        {isOpen && (
          <div className="menu-overlay">
            <Link to="/game">
              <p className="menu-text">Go to game mode</p>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
