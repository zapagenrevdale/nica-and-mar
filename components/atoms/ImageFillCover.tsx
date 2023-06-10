import React from "react";
import Image from "next/image";

const ImageFillCover: React.FC<Props> = ({
  image,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <Image
      src={image}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={{
        position: "absolute",
        objectFit: "cover",
        objectPosition: "top",
        width: "100%",
        height: "100%",
      }}
      quality={80}
    />
  );
};

interface Props {
  image: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default ImageFillCover;
