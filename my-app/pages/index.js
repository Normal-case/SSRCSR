import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
      <h1>SSR</h1>
      <div className={styles.container}>
      { 
        images?.map((image, index) => {
          return (
            <div>
              <div className={styles.images}>
                <img
                  src={image.thumbnailUrl}
                  width={150}
                  height={150}
                />
              </div>
              <div>{image.title}</div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
