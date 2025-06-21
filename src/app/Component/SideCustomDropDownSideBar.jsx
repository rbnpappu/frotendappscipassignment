"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SideCustomDropDownSideBar = () => {
  const [idealFor, setIdealFor] = useState(false);
  const [occasion, setOccasion] = useState(false);
  const [work, setWork] = useState(false);
  const [fabric, setFabric] = useState(false);
  const [segment, setSegment] = useState(false);
  const [suitablefor, setSutableFor] = useState(false);
  const [rawMaterials, setRawMaterials] = useState(false);
  const [pattern, setPattern] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    if(window.innerWidth<=768){
      setIsMobile(true)
    }
    setIsMobile(false);
  })
  return (
    <div
      style={{
    display: "block", // Allows vertical expansion
    minHeight: "100vh",
    width: "20%",
    padding: "1rem",
    backgroundColor: "#fff",
    zIndex: isMobile ? "15" : "0"
  }}
    >
      {/* Customizable checkbox */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "90%",
          alignItems: "center",
          gap: "1rem",
          borderBottom: "3px solid #e1dede",
          paddingBottom: "1rem",
        }}
      >
        <input
          type="checkbox"
          style={{
            transform: "scale(1.5)",
            accentColor: "#000",
            cursor: "pointer",
          }}
        />
        <span
          style={{
            fontFamily: "sans-serif",
            fontWeight: "600",
          }}
        >
          CUSTOMIZABLE
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          padding: "1rem",
          borderBottom: "3px solid #e1dede",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            
          }}
          onClick={() => {
            setIdealFor(!idealFor);
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            IDEAL FOR
          </span>
          {!idealFor ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          All
        </p>
        {idealFor && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Unselect all
            </span>

            {["Men", "Women", "Baby & Kids"].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(1.2)",
                    accentColor: "#000",
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontWeight: "400" }}>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          borderBottom: "3px solid #e1dede",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setOccasion(!occasion);
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            OCCASION
          </span>
          {!occasion ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "90%",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          All
        </p>
        {occasion && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Unselect all
            </span>

            {["Men", "Women", "Baby & Kids"].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(1.2)",
                    accentColor: "#000",
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontWeight: "400" }}>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          borderBottom: "3px solid #e1dede",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setWork(!work);
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            WORK
          </span>
          {!work ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "90%",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          All
        </p>
        {work && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Unselect all
            </span>

            {["Men", "Women", "Baby & Kids"].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(1.2)",
                    accentColor: "#000",
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontWeight: "400" }}>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          borderBottom: "3px solid #e1dede",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setFabric(!fabric);
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            FABRIC
          </span>
          {!fabric ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "90%",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          All
        </p>
        {fabric && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Unselect all
            </span>

            {["Men", "Women", "Baby & Kids"].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(1.2)",
                    accentColor: "#000",
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontWeight: "400" }}>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          borderBottom: "3px solid #e1dede",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setSegment(!segment);
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            SEGMENT
          </span>
          {!segment ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "90%",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          All
        </p>
        {segment && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Unselect all
            </span>

            {["Men", "Women", "Baby & Kids"].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(1.2)",
                    accentColor: "#000",
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontWeight: "400" }}>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          borderBottom: "3px solid #e1dede",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setSutableFor(!suitablefor);
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            SUITABLE FOR
          </span>
          {!suitablefor ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "90%",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          All
        </p>
        {suitablefor && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Unselect all
            </span>

            {["Men", "Women", "Baby & Kids"].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(1.2)",
                    accentColor: "#000",
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontWeight: "400" }}>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          margin: '1rem',
          borderBottom: "3px solid #e1dede",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setRawMaterials(!rawMaterials);
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            RAW MATERIALS
          </span>
          {!rawMaterials ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          All
        </p>
        {rawMaterials && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Unselect all
            </span>

            {["Men", "Women", "Baby & Kids"].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(1.2)",
                    accentColor: "#000",
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontWeight: "400" }}>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          borderBottom: "3px solid #e1dede",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setPattern(!pattern);
          }}
        >
          <span
            style={{
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            PATTERN
          </span>
          {!pattern ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          All
        </p>
        {pattern && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                color: "gray",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Unselect all
            </span>

            {["Men", "Women", "Baby & Kids"].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    transform: "scale(1.2)",
                    accentColor: "#000",
                    cursor: "pointer",
                  }}
                />
                <span style={{ fontWeight: "400" }}>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideCustomDropDownSideBar;
