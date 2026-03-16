import { useState, useEffect } from 'react'
import MatthewProfile1 from '../../src/assets/images/Matthew-Prof1.jpg'
import MatthewProfile2 from '../../src/assets/images/Matthew-prof.jpg'

function MatthewContent() {
  const [image, setImage] = useState(MatthewProfile1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (image === MatthewProfile1) {
        setImage(MatthewProfile2)
        console.log('swapped to 2')
      } else if (image === MatthewProfile2) {
        setImage(MatthewProfile1)
        console.log('swapped to 1')
      }
    }, 20000)

    return () => clearInterval(interval) // clears up the interval on unmount of the compoennt so it doesnt carry on running in the backgorund
  }, [])

  return (
    <div>
      <div>
        <img src={image} alt="Matthew-profile-image" />
      </div>
    </div>
  )
}

export default MatthewContent
