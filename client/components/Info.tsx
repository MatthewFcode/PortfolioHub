import { useRef } from 'react'
import background from '../../src/assets/images/sometimes-portfolio.gif'
import HamburgerInfo from './HamburgerInfo.tsx'
import Content from './InfoContent.tsx'
function Info() {
  const containerRef = useRef<HTMLDivElement>(null)
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
      <Content />
      <HamburgerInfo />
    </div>
  )
}
export default Info
