import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Button from '@/components/Button'




/**
 * Props for `SplitImageText`.
 */
export type SplitImageTextProps =
  SliceComponentProps<Content.SplitImageTextSlice>;

/**
 * Component for "SplitImageText" Slices.
 */
const SplitImageText = ({ slice }: SplitImageTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <div className="flex justify-center items-center w-screen bg-greenGrey">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] py-24">
      
        <PrismicNextImage field={slice.primary.image} className={`w-full h-auto rounded-3xl ${['default'].includes(slice.variation) ? '' : 'md:order-last'}`.trim()}
 />

        <div className="flex flex-col gap-4 items-start">
          {/* <PrismicRichText field={slice.primary.text} />
          {
            ["splitButtonLeft"].includes(slice.variation) &&
            <Button link={slice.primary.button_link} label={slice.primary.button_label} />
          } */}


        </div>
        
      </div>
    </div>

    </section>
  );
};

export default SplitImageText;
