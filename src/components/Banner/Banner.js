import React from 'react';

const Banner = ({ bgImage, smallTitle, heading }) => {
  return (
    <div
      className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="text-center">
        <p className="text-sm uppercase tracking-wide">{smallTitle}</p>
        <h1 className="text-3xl font-bold mt-2">{heading}</h1>
      </div>
    </div>
  );
};

export default Banner;
