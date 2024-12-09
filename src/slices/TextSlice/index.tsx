import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextSlice`.
 */
export type TextSliceProps = SliceComponentProps<Content.TextSliceSlice>;

/**
 * Component for "TextSlice" Slices.
 */
const TextSlice = ({ slice }: TextSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default TextSlice;
