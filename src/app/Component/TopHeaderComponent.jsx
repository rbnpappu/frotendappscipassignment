import React from 'react';
import style from './component.module.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person2Icon from '@mui/icons-material/Person2';
import Image from 'next/image';

const TopHeaderComponent = () => {
  return (
    <div className={style.TopHeaderComponent}>
        <Image src="/assets/Logo.png" alt="Company logo" width={50} height={50} />
        <span style={{ marginLeft: '0.5rem' }}>LOGO</span>


      <div className={style.filterlogos}>
        <SearchIcon className={style.filterlogosIcons} />
        <FavoriteBorderIcon className={style.filterlogosIcons} />
        <LocalMallOutlinedIcon className={style.filterlogosIcons} />
        <Person2Icon className={style.filterlogosIcons} />
        <select name="language" className={style.languageSelect}>
          <option value="ENG">ENG</option>
          <option value="HINDI">HINDI</option>
        </select>
      </div>
    </div>
  );
};

export default TopHeaderComponent;
