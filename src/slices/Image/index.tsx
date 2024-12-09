import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";

type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image = ({ slice, index }: ImageProps) => {
  const image = slice.primary.image;

  return (
    <Bounded
      as="section"
      className={clsx("bg-gray-100", index === 0 && "pt-0 md:pt-0")}
    >
      {isFilled.image(image) && (
        <div className="bg-gray-100 pt-0 pb-0 flex justify-center items-center h-screen"> 
          <PrismicNextImage field={image} sizes="100vw" className="w-3/4" />
        </div>
      )}
    </Bounded>
  );
};

export default Image;
