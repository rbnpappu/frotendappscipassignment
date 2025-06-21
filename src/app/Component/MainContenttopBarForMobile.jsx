import React, { useState } from "react";
import style from "./component.module.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { Button } from "@mui/material";
import RecommendedSelectBox from "./RecommendedSelectBox";
import useToggleStore from "./store/store";

const MainContenttopBarForMobile = () => {
  const [toggle, setToggle] = useState(false);
  const { isVisible, setVisible } = useToggleStore();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        width: "100%",
        borderTop: "2px solid gray",
        borderBottom: "2px solid gray",
        margin: '1rem'
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <Button
          variant="text"
          sx={{
            color: "black",
          }}
          onClick={() => {
            setToggle(!toggle);
            setVisible(!isVisible);
          }}
        >
              <span
                style={{
                  color: "black",
                }}
              >
                FILTER
              </span>
            
        </Button>
      </div>
      <RecommendedSelectBox />
    </div>
  );
};

export default MainContenttopBarForMobile;
