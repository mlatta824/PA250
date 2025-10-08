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
  position?: "absolute" | "relative" | "fixed" | "static" | "sticky";
  top?: number | string;
  right?: number | string;
  fill?: boolean;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 300,
  height = 300,
  className = "",
  priority = false,
  position,
  top,
  right,
  fill = false,
}) => {
  const style: React.CSSProperties = {
    position,
    top,
    right,
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
