import React, { useMemo } from "react";
import { useMediaQuery } from "../../hooks/use-media-query";

const tablet: string = "(min-width: 768px)";
const desktop: string = "(min-width: 128px)";

type ImageProps =   React.ImgHTMLAttributes<HTMLImageElement> & {
  source: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

const Image: React.FC<ImageProps> = ({ source, ...rest }) => {
  const isTablet: boolean = useMediaQuery(tablet);
  const isDesktop: boolean = useMediaQuery(desktop);

  const src: string = useMemo(() => {
    if (isDesktop) {
      return source.desktop;
    }
    if (isTablet) {
      return source.tablet;
    }
    return source.mobile;
  }, [isTablet, isDesktop, source]);

  return <img src={src} {...rest} />;
};

export default Image;
