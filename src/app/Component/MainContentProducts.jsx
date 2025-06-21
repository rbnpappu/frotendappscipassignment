import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InstagramLikeHeart from './InstagramLikeHeart';

const MainContentProducts = () => {
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data.slice(0, 20));
      } catch (error) {
        console.error(error);
      }
    };

    fetch();

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width < 1024);
    };

    handleResize(); // check on mount
    window.addEventListener('resize', handleResize); // also listen to resizes

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gridCols = isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  const gapSize = isMobile || isTablet ? '3rem' : '6rem';

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        gap: gapSize,
        padding: '1rem',
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            backgroundColor: '#f9f9f9',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'contain',
              transform: 'scaleX(-1)',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem',
                }}
              >
                {product.title.length > 20
                  ? product.title.slice(0, 20) + '...'
                  : product.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p
                  style={{
                    width: '100%',
                    color: '#555',
                    fontSize: isMobile ? '0.525rem' : '0.78rem',
                    fontStyle: 'italic',
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: 'gray',
                      textDecoration: 'underline',
                    }}
                  >
                    Sign in
                  </a>{' '}
                  or Create an account to see pricing
                </p>
                <InstagramLikeHeart />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContentProducts;
