import React from 'react'

const NavBarForMobile = () => {
  return (
    <div
    style={{
        display: 'flex',
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        listStyle: 'none',
        fontWeight: 600
      }}>
        <li style={{
          color: 'gray',
          cursor: 'pointer'
        }}>
          <a href='#'/>
          Home
        </li>
        <li>
          <hr style={{
            background: 'gray',
            height: '1rem',
          }}/>
        </li>
        <li style={{
            cursor: 'pointer'
        }}>
            <a href='#'/>
            SHOP
        </li>
   
      </ul>
    </div>
  )
}

export default NavBarForMobile
