import React from 'react';
import style from './component.module.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person2Icon from '@mui/icons-material/Person2';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const TopHeaderComponentForMobile = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
        <Menu size={30} style={{
          cursor: 'pointer'
        }} />
        <Image src="/assets/Logo.png" alt="Company logo" width={30} height={30} />
        </div>
        <h1 style={{
          fontSize: '1.5rem',
          fontFamily: "sans-serif",
          fontWeight: "900"
        }}>LOGO</h1>


      <div style={{
        display: 'flex',
        gap: '1px',
      }}>
        <SearchIcon  style={{
          fontSize: "3rem",
        }}/>
        <FavoriteBorderIcon  style={{
          fontSize: "3rem",
        }}/>
        <LocalMallOutlinedIcon style={{
          fontSize: "3rem",
        }}/>
      </div>
    </div>
  );
};

export default TopHeaderComponentForMobile;
