import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {

  const [images, setImages] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(res => res.json())
      .then(json => {
        setImages(json)
      })
  }, [])
  return (
    <div>
      Hello Next.js
      {
        images.map((image, index) => {
          return (
            <img
              src={image.thumbnailUrl}
              width={150}
              height={150}
            />
          )
        })
      }

    </div>
  )
}
