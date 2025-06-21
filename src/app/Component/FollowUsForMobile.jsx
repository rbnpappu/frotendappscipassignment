import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FollowUsForMobile = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '2rem',
        borderTop: '1px solid white',
        borderBottom: '2px solid white',
        paddingBottom: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          cursor: 'pointer',
        }}
        onClick={() => setShowIcons(!showIcons)}
      >
        <h3
          style={{
            color: '#fff',
            fontFamily: 'sans-serif',
            fontWeight: 600,
            fontSize: '16px',
          }}
        >
          FOLLOW US
        </h3>
        {showIcons ? <ChevronUp color="#fff" /> : <ChevronDown color="#fff" />}
      </div>

      {showIcons && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          <Image
            src="/assets/Insta.png"
            alt="Instagram"
            width={20}
            height={20}
            style={{
              borderRadius: '50%',
            }}
          />
          <Image
            src="/assets/mdi_linkedin.png"
            alt="LinkedIn"
            width={20}
            height={20}
            style={{
              borderRadius: '50%',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FollowUsForMobile;
