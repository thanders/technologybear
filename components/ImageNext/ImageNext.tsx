// import link artifacts
// import image artifacts
import Image from 'next/image';

// Thumbnail properties
type Props = {
    src: string,
    width: string,
    height: string,
    alt: string,
}


function ImageNext({src, width, height, alt }: Props) {
  // Add the Thumbnail cover image
    return (
      <Image
      height={height}
      width={width}
      src={src}
      alt={alt}
      />
    )
}

// export Thumbnail module
export default ImageNext;