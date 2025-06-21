'use client'


import { useEffect, useState } from "react";
import FooterComponent from "./Component/FooterComponent";
import FooterComponentinend from "./Component/FooterComponentinend";
import HeroSectionComponent from "./Component/HeroSectionComponent";
import MainContent from "./Component/MainContent";
import MainContenttopBar from "./Component/MainContenttopBar";
import NavBar from "./Component/NavBar";
import TopHeaderComponent from "./Component/TopHeaderComponent";
import HeroSectionComponentMobile from "./Component/HeroSectionComponentMobile";
import TopHeaderComponentForMobile from "./Component/TopHeaderComponentForMobile";
import NavBarForMobile from "./Component/NavBarForMobile";
import MainContenttopBarForMobile from "./Component/MainContenttopBarForMobile";
import FooterComponentForMobile from "./Component/FooterComponentforMobile";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    if(window.innerWidth<=768){
      setIsMobile(true);
    }else{
      setIsMobile(false);
    }
  })

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}>
      <main>
      {isMobile ? (<TopHeaderComponentForMobile/>) :(<TopHeaderComponent/>)}
      {isMobile ? (<NavBarForMobile/>): (<NavBar/>)}
      {isMobile ? (<HeroSectionComponentMobile/>) : (<HeroSectionComponent/>)}
      {isMobile  ? (<MainContenttopBarForMobile/>) : (<MainContenttopBar/>)}
      <MainContent/>
      {isMobile ? (<FooterComponentForMobile/>):(<FooterComponent/>)}
      </main>
    </div>
  );
}
