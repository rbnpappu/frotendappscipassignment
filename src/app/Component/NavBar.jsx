import React from 'react'

const NavBar = () => {
  return (
    <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        fontFamily: 'sans-serif',
        fontSize: '1rem',
        fontWeight:100,
         width: '100%',
        borderBottom: '4px solid #eee5e5'
    }}
    >
      <ul style={{
        display: 'flex',
        gap: '1.625rem',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        listStyle: 'none',
        fontWeight: 600
      }}>
        <li style={{
            cursor: 'pointer'
        }}>
            <a href='#'/>
            SHOP
        </li>
         <li style={{
            cursor: 'pointer'
        }}>
            <a href='#'/>
            SKILLS
        </li>
         <li style={{
            cursor: 'pointer'
        }}>
            <a href='#'/>
            STORIES
        </li>
         <li style={{
            cursor: 'pointer'
        }}>
            <a href='#'/>
            ABOUT
        </li>
         <li style={{
            cursor: 'pointer'
        }}>
            <a href='#'/>
            CONTACT US
        </li>
      </ul>
    </div>
  )
}

export default NavBar
