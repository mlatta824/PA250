"use client";
import React from "react";
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  top?: number | string;
  right?: number | string;
  fill?: boolean;

  
 
}
export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 0,
  height = 0,
  className = "",
  priority = false,
  fill = false,
  
}) => {
  const style: React.CSSProperties = {
    width: width || undefined,
    height: height || undefined, 
    overflow: "hidden",
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      className={className}
      style={style}
    />
  );
};
