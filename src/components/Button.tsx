import { PrismicNextLink } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import { LinkField } from '@prismicio/types';

type ButtonProps = {
  link: LinkField; // Link field from Prismic
  label: string;   // Text for the button
};

const Button = ({ link, label }: ButtonProps) => {
  return (
    <div>
      <PrismicNextLink field={link}>
        <button>{label}</button>
      </PrismicNextLink>
    </div>
  );
};

export default Button;
