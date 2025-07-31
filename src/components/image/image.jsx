import { Image } from '@imagekit/react';

const IKImage = ({ path, alt, className, w, h }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      src={path}
      alt={alt}
      transformation={[{ width: w, height: h }]}
      loading='lazy'
      className={className}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default IKImage;
