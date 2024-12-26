import Image from 'next/image';
import React from 'react';

// Avatar is full rounded
const Avatar = ({ src, alt, width = 24 }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={width}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
    />
  );
};

export default Avatar;
