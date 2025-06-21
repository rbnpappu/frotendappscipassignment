import React,{useState} from "react";
import style from "./component.module.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { Button } from "@mui/material";
import RecommendedSelectBox from "./RecommendedSelectBox";
import useToggleStore from "./store/store";

const MainContenttopBar = () => {
  const [toggle, setToggle] = useState(false);
  const {isVisible, setVisible} = useToggleStore();
  
  return (
    <div className={style.topBar}>
      <div
        style={{
          display: "flex",
          gap: "6rem",
        }}
      >
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: "600",
            fontSize: "0.625rem",
            justifyContent: 'center',
            alignItems: 'center',
            margin: "2rem"

          }}
        >
          {20} ITEMS
        </p>
        <Button
          variant="text"
          sx={{
            color: 'gray',
          }}
          onClick={() => {
            setToggle(!toggle);
            setVisible(!isVisible);
          }}
        >
          {!toggle ? (
            <>
              <ChevronLeftOutlinedIcon />
              <span style={{
                color: 'gray',
                textDecoration: 'underline'
              }}>HIDE FILTER</span>
            </>
          ) : (
            <>
              <ChevronRightOutlinedIcon />
              <span style={{
                  color: 'gray',
                textDecoration: 'underline'
              }}>SHOW FILTER</span>
            </>
          )}
        </Button>
      </div>
      <RecommendedSelectBox/>
    </div>
  );
};

export default MainContenttopBar;
