import React, { useEffect } from 'react'
import SideCustomDropDownSideBar from './SideCustomDropDownSideBar'
import MainContentProducts from './MainContentProducts'
import FooterComponent from './FooterComponent'
import FooterComponentinend from './FooterComponentinend'
import useToggleStore from './store/store'

const MainContent = () => {
  const {isVisible, toggleVisibility} = useToggleStore();
  const [isMobile, setIsMobile] = React.useState(false);
  useEffect(()=>{
    if(window.innerWidth<=768){
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
  })
  return (
    <div style={{
      display: 'flex',
      justifyContent: isVisible?"space-between": "center",
      padding: isMobile?"0":"2rem",
      flexDirection: isMobile ? 'column' : 'row'
    }}>

      {(isVisible && (!isMobile) ) && (<SideCustomDropDownSideBar/>)}
      <MainContentProducts/>
    </div>
  )
}

export default MainContent
