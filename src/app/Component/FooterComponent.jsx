import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FooterComponent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        if(window.innerWidth<=768){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    })
  return (
    <div
    style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflowX: 'hidden',
        overflowY: 'hidden',
        width: "100%" /* Full screen width */,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile?"column": "row",
          justifyContent: isMobile ? "center":"space-around",
          alignItems: isMobile?"center":"flex-start",
          padding: '2rem',
          width: "100%", // Optional: control width
          borderBottom: "3x solid #c7cbcb",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h3
            style={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              color: "white",
              fontSize: "1.625rem",
              margin: 0
            }}
          >
            BE THE FIRST TO KNOW
          </h3>
          <span
            style={{
              color: "#fff",
              fontSize: "1.55rem",

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
          <p
            style={{
              color: "gray",
              fontFamily: "sans-serif",
              fontWeight: 300,
            }}
          >
            +44 221 133 5360
          </p>
          <p
            style={{
              color: "gray",
              fontFamily: "sans-serif",
              fontSize: "8px",
              fontWeight: 300,
            }}
          >
            customercare@mettamuse.com
          </p>
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
              fontSize: "10px",
              marginTop: "1rem",
            }}
          >
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile?"column":'row',
          justifyContent: isMobile?"center":"space-around",
          marginRight: "1rem",
          width: '100%',
          
        }}
      >
        <div style={{display: 'flex'}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin:"2rem"
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
            mettā muse
          </h3>
          <span
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            About Us
          </span>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Stories
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Artisans
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Boutiques
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Contact Us
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            EU Compliances Docs
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "2rem"
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
            Quick Links
          </h3>
          <span
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Orders & Shipping
          </span>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Join/Login as a Seller
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Payment & Pricing
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Return & Refunds
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            FAQs
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Privacy Policy
          </p>
          <p
            style={{
              color: "gray",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Terms & Conditions
          </p>
        </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin:"2rem"
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
            FOLLOW US
          </h3>
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: '1rem'
          }}>
            <Image 
              src="/assets/Insta.png"
              alt="logo"
              width={20}
              height={20}
              style={{
                borderRadius: "50%",
              }}
            />
            <Image
            src="/assets/mdi_linkedin.png"
                         alt="logo"
              width={20}
              height={20}
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
          }}>
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
          <div style={{
            display: "flex",
            gap: '1rem'
          }}>
            <Image
            src="/assets/google.png"
            alt="logo"
            width={40}
            height={20}
            />
               <Image
            src="/assets/master.png"
            alt="logo"
            width={40}
            height={20}
            />
               <Image
            src="/assets/paypal.png"
            alt="logo"
            width={40}
            height={20}
            />
               <Image
            src="/assets/amex.png"
            alt="logo"
            width={40}
            height={20}
            />
               <Image
            src="/assets/mac.png"
            alt="logo"
            width={40}
            height={20}
            />
               <Image
            src="/assets/dpay.png"
            alt="logo"
            width={40}
            height={20}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
