import Image from 'next/image'

interface PrommoBannerProps {
  src: string
  alt: string
}

export const PrommoBanner = ({ src, alt }: PrommoBannerProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vh"
      className="w-full h-auto object-contain"
    />
  )
}
