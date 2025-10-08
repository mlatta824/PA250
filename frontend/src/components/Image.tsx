"use client";
import React from "react";
import NextImage from "next/image"; 

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src, alt, width = 300, height = 300, className = "", priority = false, fill = false
}) => (
  <div className={`flex justify-center items-center ${className}`}>
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-cover"
      priority={priority}
    />
  </div>
);

