import React, { useState, useEffect } from 'react'

export default function Home() {

  const [images, setImages] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setImages(json)
      })
  }, [])

  return (
    <div>
      Hello Next.js
    </div>
  )
}
