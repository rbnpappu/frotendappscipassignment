"use client";

import { ChevronDown, Check } from "lucide-react"; // Make sure lucide-react is installed
import React, { useRef, useState, useEffect } from "react";

const RecommendedSelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  const dropdownRef = useRef();

  useEffect(() => {
    console.log(dropdownRef.current,"click")
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE:HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left"
    ref={dropdownRef}
    >
      <button
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "none",
          cursor: "pointer",
          width: "13rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#f9f9f9",
        }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selected} <ChevronDown />
      </button>

      {isOpen && (
        <div
          style={{
            marginTop: "1rem",
            width: "12rem",
            backgroundColor: "white",
            position: "absolute",
            right: "2rem",
            zIndex: "10",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
                cursor: "pointer",
                gap: "0.5rem",
                backgroundColor: selected === option ? "#f5f5f5" : "#fff",
                fontWeight: selected === option ? "600" : "normal",
                fontFamily: "sans-serif",
                width: "12rem",
                justifyContent: "flex-end",
              }}
            >
              {selected === option ? (
                <Check
                  size={20}
                  style={{
                    color: "black",
                    marginRight: "8px",
                  }}
                />
              ) : (
                <span style={{ marginRight: "8px" }}></span>
              )}

              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedSelectBox;
