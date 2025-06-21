import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import MetamuseMobileComponent from "./MetamuseMobileComponent";
import QuickLinksForMobile from "./QuickLinksForMobile";
import FollowUsForMobile from "./FollowUsForMobile";

export default function FooterComponentForMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

        width: "100vw" /* Full screen width */,
        minHeight: "40vh" /* Adjust based on footer content */,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-around",
          alignItems: isMobile ? "center" : "flex-start",

          width: "100%", // Optional: control width
          borderBottom: "3x solid #c7cbcb",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
            borderBottom: "2px solid #fff",
          }}
        >
          <h3
            style={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              color: "white",
              fontSize: "1.325rem",
              margin: 0,
            }}
          >
            BE THE FIRST TO KNOW
          </h3>
          <span
            style={{
              color: "#fff",
              fontSize: "1.25rem",
            }}
          >
            Sign up for updates from mettā muse.
          </span>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <input
              placeholder="Enter your e-mail..."
              style={{
                padding: "1rem",
              }}
            />
            <Button
              variant="outlined"
              sx={{
                color: "gray",
                border: "solid 1px gray",
              }}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "1rem",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontFamily: "sans-serif",
              fontWeight: 600,
            }}
          >
            CONTACT US
          </h3>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <p
              style={{
                color: "white",
                fontFamily: "sans-serif",
                fontWeight: 300,
              }}
            >
              +44 221 133 5360
            </p>
            <p
              style={{
                color: "white",
                fontFamily: "sans-serif",
                fontSize: "8px",
                fontWeight: 300,
              }}
            >
              customercare@mettamuse.com
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderBottom: "2px solid white",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontFamily: "sans-serif",
                fontWeight: 600,
              }}
            >
              CURRENCY
            </h3>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/assets/usa.png"
                alt="logo"
                width={30}
                height={30}
                style={{
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  margin: "0",
                  padding: "0",
                  backgroundColor: "#fff",
                  transform: "rotate(45deg)",
                }}
              ></div>
              <h3
                style={{
                  color: "#fff",
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                  fontSize: "10px",
                }}
              >
                USD
              </h3>
            </div>
            <span
              style={{
                color: "gray",
                fontSize: "12px",
                color: "#fff",
              }}
            >
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-around",
          marginRight: "1rem",
          width: "100%",
        }}
      >
        <MetamuseMobileComponent />
        <QuickLinksForMobile />
        <FollowUsForMobile />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "2rem",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontFamily: "sans-serif",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            mettā muse Accepts
          </h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Image
              src="/assets/google.png"
              alt="Google Pay"
              width={40}
              height={20}
            />
            <Image
              src="/assets/master.png"
              alt="Mastercard"
              width={40}
              height={20}
            />
            <Image
              src="/assets/paypal.png"
              alt="PayPal"
              width={40}
              height={20}
            />
            <Image src="/assets/amex.png" alt="Amex" width={40} height={20} />
            <Image src="/assets/mac.png" alt="Mac" width={40} height={20} />
            <Image src="/assets/dpay.png" alt="DPay" width={40} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
