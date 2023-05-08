import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Csr() {

  const [images, setImages] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=500')
      .then(res => res.json())
      .then(json => {
        setImages(json)
      })
  }, [])

  return (
    <div className={styles.body}>
      <h1>CSR</h1>
      <div className={styles.contents}>
        <div className={styles.container}>
        { 
          images?.map((image, index) => {
            return (
              <div className={styles.card} key={index}>
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
    </div>
  )
}