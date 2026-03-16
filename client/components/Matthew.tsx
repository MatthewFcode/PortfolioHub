import { useRef } from 'react'
import background from '../../src/assets/images/portfolio-me.gif'
import HamburgerInfo from './HamburgerHome.tsx'
import MatthewContent from './MatthewContent.tsx'

function Matthew() {
  const containerRef = useRef<HTMLDivElement>(null) // stores anaimtions and data that shouldnt trigger re renders
  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw', // full screen width
        height: '100vh', // full screen height
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover', // cover entire area
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      {' '}
      <MatthewContent />
      <HamburgerInfo />
    </div>
  )
}

export default Matthew
