import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const QuickLinksForMobile = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "2rem",
        paddingBottom: '1rem',
        borderBottom: "2px solid white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          cursor: "pointer",
        }}
        onClick={() => setToggle(!toggle)}
      >
        <h3
          style={{
            color: "#fff",
            fontFamily: "sans-serif",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
            QUICK LINKS
        </h3>
        {toggle ? <ChevronUp  color="#fff" /> : <ChevronDown   color="#fff"/>}
      </div>

      {toggle && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {[
            "Orders & Shipping",
            "Join/Login as a Seller",
            "Payment & Pricing",
            "Return & Refunds",
            "FAQs",
            "Privacy Policy",
            "Terms & Conditions",
          ].map((text, index) => (
            <p
              key={index}
              style={{
                color: "gray",
                fontSize: "12px",
                fontFamily: "sans-serif",
              }}
            >
              {text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuickLinksForMobile;
