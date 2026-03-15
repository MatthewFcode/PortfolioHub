import { useState, useEffect } from 'react'

function MatthewContent() {
  const [image, setImage] = useState('')

  useEffect(() => {
    setInterval(() => {
      setImage
    })
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
