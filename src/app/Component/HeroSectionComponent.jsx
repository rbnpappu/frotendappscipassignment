import React from 'react'
import style from './component.module.css'
const HeroSectionComponent = () => {
  return (
    <div className={style.heroSection}>
      <h1>DISCOVER OUR PRODUCTS</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <p style={{
        margin: '0',
        padding:'0'
      }}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus </p>
      <p
      style={{
        margin: '0',
        padding:'0'
      }}
      >scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor</p>
      </div>
    </div>
  )
}

export default HeroSectionComponent
