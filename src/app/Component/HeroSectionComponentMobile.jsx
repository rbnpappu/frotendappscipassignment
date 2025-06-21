import React from 'react'
import style from './component.module.css'
const HeroSectionComponentMobile = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{
        fontSize: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}>DISCOVER OUR PRODUCTS</h1>
      <p style={{
        maxWidth: '90%',
        margin: "0 auto",
        fontSize: "0.95rem",
        textAlign: "center",
        color: "#555",
        lineHeight: "1.6"
      }}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
      scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor</p>
    </div>
  )
}

export default HeroSectionComponentMobile
